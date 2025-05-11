"use client";
import { Suspense } from "react";
import LoadingScreen from "@/app/myComps/LoadingScreen";
import SignUp from "./Content";

export default function page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SignUp />
    </Suspense>
  );
}