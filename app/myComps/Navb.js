'use client'
import { usePathname } from 'next/navigation'
import { House, ShoppingCart, Menu ,ChevronDown} from 'lucide-react' // ✅ Correct icon imports
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

const navdata = [
    { id: 1, name: 'Home', link: '/', icon: <House className="mr-2" /> },
    { id: 2, name: 'Events', link: '/events', icon: <House className="mr-2" /> },
    { id: 3, name: 'Volunteers', link: '/volunteers', icon: <House className="mr-2" /> },
    { id: 4, name: 'About', link: '/about', icon: <ShoppingCart className="mr-2" /> },
    { id: 5, name: 'Contact', link: '/contact', icon: <House className="mr-2" /> },
]

const customEvents = ["abc","education","cloth distrubustion","foood distribution"];

export default function Navb() {
    const path = usePathname(); // ✅ Directly use usePathname

    return (
        <div className='flex justify-between px-4 pt-2 items-center fixed z-50 backdrop-blur-lg  w-full'>
            <Image
                src="/swamijiLogo.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-md object-contain"
            />

            {/* Desktop Menu */}
            <nav>
                <ul className='hidden md:flex'>
                    {navdata.map((item) => (
                        item.name=="Events"?<li key={item.id} className={`px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2 
                            `}>
                           
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button variant="link" className={`p-0 ${path.includes(item.link) ? "text-orange-500" : "text-black"}`}><ChevronDown />{item.name}</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup className='bg-white p-2 rounded border'>
                                            {
                                                customEvents.map((event)=>(
                                                    <DropdownMenuItem key={event} className='text-black p-2'>
                                                        <Link href={`/events/${event}`}>{event }</Link>
                                                    </DropdownMenuItem>
                                                ))

                                            }
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                           
                        </li>:
                            <li key={item.id} className={`px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2 
                                ${path === item.link ? "text-orange-500" : "text-black"}`}>
                                <Link href={item.link} className='flex items-center'>
                                    
                                    {item.name}
                                </Link>
                            </li>
                            

                    ))}
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
                    <nav className='mt-20'>
                        <ul>
                        {navdata.map((item) => (
                        item.name=="Events"?<li key={item.id} className={`px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2 
                            `}>
                           
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button variant="link" className={`p-0 ${path.includes(item.link) ? "text-orange-500" : "text-black"}`}>{item.name}<ChevronDown /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup className='bg-white p-2 rounded border'>
                                            {
                                                customEvents.map((event)=>(
                                                    <DropdownMenuItem key={event} className='text-black p-2'>
                                                        <Link href={`/events/${event}`}>{event }</Link>
                                                    </DropdownMenuItem>
                                                ))

                                            }
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                           
                        </li>:
                            <li key={item.id} className={`px-4 flex items-center font-semibold hover:bg-orange-50 rounded-md py-2 
                                ${path === item.link ? "text-orange-500" : "text-black"}`}>
                                <Link href={item.link} className='flex items-center'>
                                    
                                    {item.name}
                                </Link>
                            </li>
                            

                    ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
