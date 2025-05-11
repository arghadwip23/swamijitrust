"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [invitationCode, setInvitationCode] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    code: "",
  });

  // Load ?code=XYZ from URL
  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      setInvitationCode(code);
      setFormData((prev) => ({ ...prev, code }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpass) {
      toast.error("Passwords do not match");
      return;
    }

    const { name, email, password, code } = formData;

    const signupPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, code }),
        });

        const data = await res.json();
        if (!res.ok) {
          reject(new Error(data.message || "Signup failed"));
        } else {
          resolve(data);
        }
      } catch (err) {
        reject(new Error("Network error or unexpected failure"));
      }
    });

    toast.promise(signupPromise, {
      loading: "Creating your account...",
      success: (data) => data.message || "Signup successful!",
      error: (err) => err.message || "Signup failed!",
    });

    try {
      const result = await signupPromise;
      toast.success(
        "A verification link has been sent to your email. Redirecting to login...",
        { duration: 10000 }
      );
      setTimeout(() => {
        router.push("/login");
      }, 10000);
    } catch (err) {
      // Already handled by toast
    }
  };

  return (
    <section className="p-4">
      <div className="mt-20 p-4">
        <form
          onSubmit={handleSubmit}
          className="p-4 mx-auto w-[300px] md:w-[500px] shadow-lg"
        >
          <h1 className="font-semibold text-xl">Sign Up</h1>
          <p className="text-xs text-gray-400">
            This is only for invited people. If you have the invitation code,
            you can proceed.
          </p>

          <div className="mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <Label htmlFor="code">Invitation Code</Label>
            <Input
              type="text"
              name="code"
              placeholder="Enter the invitation code"
              value={invitationCode}
              required
              onChange={(e) => {
                setInvitationCode(e.target.value);
                setFormData({ ...formData, code: e.target.value });
              }}
            />
          </div>

          <div className="mt-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <Label htmlFor="confirmpass">Confirm Password</Label>
            <Input
              type="password"
              name="confirmpass"
              placeholder="Confirm password"
              onChange={(e) =>
                setFormData({ ...formData, confirmpass: e.target.value })
              }
            />
          </div>

          <div>
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" />
    </section>
  );
}
