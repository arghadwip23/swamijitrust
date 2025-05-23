import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navb from "./myComps/Navb";
import Hero from "./myComps/Hero";
import Crousel from "./myComps/Crousel";
import Why from "./myComps/Why";
import Body from "./myComps/Body";


export default function Home() {
  return (
    <>
      <Navb />
      <Hero />
      <Crousel/>
      <Why/>
      <Body />

    </>
      
    
  );
}
