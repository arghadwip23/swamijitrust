"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LoadingScreen from "../myComps/LoadingScreen";
import ShowStatus from "./ShowStatus";

export default function Verify() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("id");

  return (
    <div className="pt-[40px] px-4 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-2">Thank you for supporting us! ❤️</h1>
      <p className="text-gray-600 mb-6 text-lg">
        We're processing your donation details below. This may take a moment.
      </p>

      {/* Dynamic part handled by ShowStatus */}
      <div className="w-full max-w-md">
        <Suspense fallback={<LoadingScreen />}>
          <ShowStatus transactionId={transactionId} />
        </Suspense>
      </div>
    </div>
  );
}
