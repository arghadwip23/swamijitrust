import * as React from "react"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent ,CardHeader,CardTitle,CardDescription,CardFooter} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GraduationCap,ArrowRight,HeartHandshake,HandHelpingIcon, HelpingHandIcon} from "lucide-react"
 
export default function Crousel() {
  return (
   <section className="flex-col justify-center items-center px-1 mt-10 overflow-x-hidden">
     
<h2 className="mt-4 text-3xl font-bold text-center">Donate for a cause <br className="md:hidden"/> you care about</h2>
<div className="b">
<Carousel
      opts={{
        align: "start",
      }}
      className="w-[70vw]  md:w-full max-w-sm md:max-w-md lg:max-w-5xl xl:max-w-7xl mt-4 mx-auto"
    >
      <CarouselContent>
       
          <CarouselItem className="  md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader className=" aspect-video p-0">
                    <AspectRatio ratio={16/9}>
                    <Image fill src="https://jocwcbzjqdlxytdxfdnl.supabase.co/storage/v1/object/public/eventgallery/events/pexels-tkirkgoz-11576242.jpg"  alt="photo for education" className="object-cover h-20 w-20 rounded-lg"/>
                    </AspectRatio>
                </CardHeader>
                <CardContent className="flex-col aspect-[4/2]  p-4">
                <CardTitle className=" inline-flex align-middle justify-center"> <GraduationCap  /><span className="pl-2 pt-1">Help for education</span></CardTitle>
                <CardDescription className="pt-3 mb-3">Education is the key to unlocking the golden door of freedom. Many underprivileged children are still struggling to access quality education. Your donation can empower them with knowledge and open doors to a brighter future.</CardDescription>
                <Button variant="link" className="p-0">Doante for Education<ArrowRight /></Button>

                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem  className="  md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader className=" aspect-video p-0">
                    <AspectRatio ratio={16/9}>
                    <Image fill src="/childrenCr.jpg"  alt="photo of three chilfren swamijitrust" className="object-cover h-20 w-20 rounded-lg"/>
                    </AspectRatio>
                </CardHeader>
                <CardContent className="flex-col aspect-[4/2]   p-4">
                <CardTitle className="flex gap-2"><HeartHandshake /> <span className="pt-1">Walefare of poor children</span></CardTitle>
                <CardDescription className="pt-3 mb-3">Every child deserves love, care, and a chance to thrive. Your support can provide food, shelter, healthcare, and opportunities to vulnerable children. Join us in bringing hope and building a brighter future!</CardDescription>
                <Button variant="link" className="p-0">Donate for poor children <ArrowRight /></Button>
                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem  className="  md:basis-2/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader className=" aspect-video p-0">
                    <AspectRatio ratio={16/9}>
                    <Image fill src="/poorCr.png"  alt="photo of three chilfren swamijitrust" className="object-cover h-20 w-20 rounded-lg"/>
                    </AspectRatio>
                </CardHeader>
                <CardContent className="flex-col aspect-[4/2]   p-4">
                <CardTitle className="flex gap-2"><HelpingHandIcon /><span className="pt-1">Help the needy people</span></CardTitle>
                <CardDescription className="pt-3">Your support can make a real difference in the lives of those who need it most. By donating, you provide hope, comfort, and essential resources to vulnerable communities. Join us in creating a brighter, more compassionate world—one act of kindness at a time.</CardDescription>
                <Button variant="link" className="p-0">donate for needy people <ArrowRight /></Button>
                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>

   </section>
  )
}