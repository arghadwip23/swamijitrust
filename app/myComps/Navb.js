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

  useEffect(() => {
    const fetchLoginInfo = async () => {
      try {
        const res = await fetch("/api/sentNavData");
        const data = await res.json();
        setLoggedin(data.isLoggedin);
      } catch (err) {
        console.error("Login fetch error:", err);
      }
    };

    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/sentEvents");
        const data = await res.json();
        setEvents(data);
        setEventCategory(Object.keys(data));
        //await console.log(data["Awarness"]);
        
      } catch (err) {
        console.error("Event fetch error:", err);
      }
    };

    fetchLoginInfo();
    fetchEvents();
  }, []);

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
          {navdata.map((item) =>
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
                      {eventCategory.map((category) => (
                        <DropdownMenuSub key={category}>
                          <DropdownMenuSubTrigger className="flex justify-between items-center w-full">
                            {category}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-white z-50 p-2 border">
                              {events[category]?.map((eventObj,index) => (
                                <DropdownMenuItem key={index}>
                                  <Link href={`/events/${eventObj}`}>
                                    {eventObj}
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
              <Link href="/logout">Logout</Link>
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
                                    <DropdownMenuItem key={eventObj.eventName}>
                                      <Link href={`/events/${eventObj.eventName}`}>
                                        {eventObj.eventName}
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
