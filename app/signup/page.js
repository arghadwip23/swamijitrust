"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    code:""
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code")||"";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpass) {
      toast.error("Passwords do not match");
      return;
    }

    const { name, email, password, code} = formData;

    const signupPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password ,code}),
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
      if(result.ok){
      toast.success("A verification link has been sent to your email id. click the link to verify yourself. Now you will be redirected to login...", { duration: 10000 });
      setTimeout(() => {
       
        router.push("/login");
      }, 10000);
    }
    } catch (err) {
      // Already handled by toast
    }
  };

  return (
    <section className="p-4">
      <div className="mt-20 p-4">
        

        <form
          onSubmit={handleSubmit}
          className="p-4   mx-auto w-[300] md:w-[500] shadow-lg"
        >
          <h1 className="font-semibold text-xl">Sign Up</h1>
          <p className="text-xs text-gray-400">this is only for invited peoples, if you have the invitation code then you can proceed with this</p>
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
              name="text"
              placeholder="Enter the invitation code"
              value={code}
              required
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
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

          </div>

          <div>
            <Button type="submit" className="mt-4">Submit</Button>
          </div>
        </form>
      </div>
      <Toaster position="top-center" />
    </section>
  );
}
