"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IndianRupee, User, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function Donate() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !amount) {
      toast.error("Please fill all the fields");
      setLoading(false);
      return;
    }

    const transactionId = `SW${Date.now().toString()}`;
    try {
      const res = await fetch("/api/initiatePayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseInt(amount) * 100,
          name,
          transactionId,
          redirectUrl: `${window.location.origin}/verify?id=${transactionId}`,
        }),
      });

      const data = await res.json();

    //   toast.promise(
    //     res,
    //     {
    //       loading: "Working on it...",
    //       success: "Redirecting to the payment page",
    //       error: "Something went wrong",
    //     }
    //   );


      console.log(data);
      if(data.success) {
        window.location.href = data.data.instrumentResponse.redirectInfo.url;
      }
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-screen py-4 custombg">
        <div className="grid md:grid-cols-2 gap-0  py-10 mt-[40px]  px-4 lg:w-3/4 mx-auto">
          <div className="hidden md:block  bg-yellow-500 p-4 customI">
            {/* <Image src="https://jocwcbzjqdlxytdxfdnl.supabase.co/storage/v1/object/public/eventgallery/events/katt-yukawa-K0E6E0a0R3A-unsplash.jpg" width={640} height={426} alt="donate" className="w-full h-full object-cover customClip" /> */}
            <h1 className="text-white text-5xl">Doante us </h1>
          </div>
          <div className="flex justify-start bg-white ">
            <form
              className=" rounded-md my-4 w-[400px]  p-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold my-2">Donate us</h2>
              <p className="text-gray-400 text-sm">
                Help us empower children and communities in Asansol through sports,
                education, and social programs. Your donation fuels real change—
                contribute today and be a part of the impact.
              </p>
              <div className="relative mt-4">
                <Label htmlFor="name">Name*</Label>
                <Input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="pl-10"
                />
                <User className="absolute top-8 left-2 text-gray-500 p-0.5" />
              </div>
              <div className="relative mt-4">
                <Label>Amount*</Label>
                <Input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  required
                  className="pl-10"
                  placeholder="Enter the amount"
                />
                <IndianRupee className="absolute top-8 left-2 text-gray-500 p-0.5" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <button
                    type="button"
                    className="bg-orange-100 rounded hover:bg-orange-300 inline-flex px-2 text-gray-500 hover:text-white transition-all duration-600"
                    onClick={() => setAmount(200)}
                  >
                    <IndianRupee className="p-1" />
                    200
                  </button>
                  <button
                    type="button"
                    className="bg-orange-100 rounded hover:bg-orange-300 inline-flex px-2 text-gray-500 hover:text-white transition-all duration-600"
                    onClick={() => setAmount(500)}
                  >
                    <IndianRupee className="p-1" />
                    500
                  </button>
                  <button
                    type="button"
                    className="bg-orange-100 rounded hover:bg-orange-300 inline-flex px-2 text-gray-500 hover:text-white transition-all duration-600"
                    onClick={() => setAmount(1000)}
                  >
                    <IndianRupee className="p-1" />
                    1000
                  </button>
                </div>
              </div>
              <Button className="mt-4" type="submit" disabled={loading}>
                <Gift className="mr-2" />
                Donate {amount && `₹${amount}`}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
}
