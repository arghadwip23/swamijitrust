"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const loginPromise = fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      return data;
    });

    toast.promise(loginPromise, {
      loading: "Logging you in...",
      success: (data) => {
        router.push("/dashboard"); // Redirect on success
        return data.message || "Login successful!";
      },
      error: (err) => err.message || "Login failed",
    });
  };

  return (
    <div className="py-20">
    <section className=" w-[300px] md:w-[500px]  mx-auto p-6  mt-20 shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-6 text-center text-orange-600">Login to Swamiji Trust</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 mb-7">Login</Button>
        <p className="mt-0 text-sm pt-0">new comer! <Link href="./signup" className="text-blue-700 mt-0">signup here</Link> </p>
      </form>
      <Toaster />
    </section>
    </div>
  );
}
