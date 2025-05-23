"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LoadingScreen from "../myComps/LoadingScreen";
import ShowStatus from "./ShowStatus";
import { useState } from "react";

export default function Verify() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("id");

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  

  return (
    <div className="pt-[20px]  h-screen flex flex-col items-center justify-center">
      <h1 className="mt-[20px]">Payment Status</h1>
      <div className="">
       <Suspense fallback={<LoadingScreen />}>
          <ShowStatus transactionId={transactionId}/>
       </Suspense>
      </div>
    </div>
  );
}
