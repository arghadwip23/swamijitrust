"use client";

import { usePathname } from "next/navigation";
import {
  House,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useUser } from "./UserContext";
import { set } from "mongoose";

const navdata = [
  { id: 1, name: "Home", link: "/", icon: <House className="mr-2" /> },
  { id: 2, name: "Events", link: "/events", icon: <House className="mr-2" /> },
  { id: 3, name: "Volunteers", link: "/volunteers", icon: <House className="mr-2" /> },
  { id: 4, name: "About", link: "/about", icon: <ShoppingCart className="mr-2" /> },
  { id: 5, name: "Contact", link: "/contact", icon: <House className="mr-2" /> },
];

export default function Navb() {
  const [loggedin, setLoggedin] = useState(false);
  const [events, setEvents] = useState({});
  const [eventCategory, setEventCategory] = useState([]);

  const path = usePathname();
  const {user} = useUser();
  useEffect(() => {
    // const fetchLoginInfo = async () => {
    //   try {
    //     const res = await fetch("/api/sentNavData");
    //     const data = await res.json();
    //     setLoggedin(data.isLoggedin);
    //   } catch (err) {
    //     console.error("Login fetch error:", err);
    //   }
    // };

    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/sentEvents");
        const data = await res.json();
        if (!data.ok) {
          //console.error("Failed to fetch events");
          toast.error("Failed to fetch events");
          
        }else{
        setEvents(data.result);
        setEventCategory(Object.keys(data.result));
        //await console.log(data["Awarness"]);
        }
      } catch (err) {
        console.error("Event fetch error:", err);
      }
    };

   // fetchLoginInfo();
   setLoggedin(user);
   console.log(user);
   
    fetchEvents();
  }, []);
  
  async function logout() {
    const res = await fetch("/api/logout",{
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.ok) {
      setLoggedin(false);
      window.location.href = "/";
    } else {
      console.error("Logout failed");
    }
    
  }

  return (
    <div className="flex justify-between px-4 pt-2 items-center fixed z-50 backdrop-blur-lg w-full">
      <Image
        src="/swamijiLogo.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-md object-contain"
      />

      {/* Desktop Menu */}
      <nav>
        <ul className="hidden md:flex">
          {navdata && navdata.map((item) =>
            item.name === "Events" ? (
              <li key={item.id} className="px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className={`p-0 ${path.includes(item.link) ? "text-orange-500" : "text-black"}`}>
                      {item.name}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuGroup className="p-2">
                      {eventCategory && eventCategory.map((category) => (
                        <DropdownMenuSub key={category}>
                          <DropdownMenuSubTrigger className="flex justify-between items-center w-full">
                            {category}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-white z-50 p-2 border">
                              {events[category]?.map((eventObj,index) => (
                                <DropdownMenuItem key={index}>
                                  <Link href={`/events/${eventObj.id}`}>
                                    {eventObj.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ) : (
              <li
                key={item.id}
                className={`px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2 ${
                  path === item.link ? "text-orange-500" : "text-black"
                }`}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            )
          )}
          {loggedin && (
            <li className="px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2">
             <Button variant="outline" onClick={logout}>Log-out</Button>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="lg" className="md:hidden p-0">
            <Menu className="text-orange-500 h-8 w-8 font-semibold" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>Menu</SheetTitle>
          <nav className="mt-20">
            <ul>
              {navdata.map((item) =>
                item.name === "Events" ? (
                  <li key={item.id} className="px-4 py-2 font-semibold">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="link" className={`p-0 ${path.includes(item.link) ? "text-orange-500" : "text-black"}`}>
                          {item.name}
                          <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white">
                        <DropdownMenuGroup className="p-2">
                          {eventCategory.map((category) => (
                            <DropdownMenuSub key={category}>
                              <DropdownMenuSubTrigger className="flex justify-between items-center w-full">
                                {category}
                                
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent className="bg-white z-50 p-2 border">
                                  {events[category]?.map((eventObj) => (
                                    <DropdownMenuItem key={eventObj.id}>
                                      <Link href={`/events/${eventObj.id}`}>
                                        {eventObj.name}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ) : (
                  <li
                    key={item.id}
                    className={`px-4 py-2 font-semibold ${
                      path === item.link ? "text-orange-500" : "text-black"
                    }`}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                )
              )}
              {loggedin && (
                <li className="px-4 py-2 font-semibold">
                  <Link href="/logout">Logout</Link>
                </li>
              )}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
