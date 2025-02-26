import Image from "next/image";
import { Button } from "@/components/ui/button";

import Hero from "./myComps/Hero";
import Crousel from "./myComps/Crousel";
import Why from "./myComps/Why";
import Body from "./myComps/Body";
export default function Home() {
  return (
    <>
      
      <Hero />
      <Crousel/>
      <Why/>
      <Body />

    </>
      
    
  );
}
