'use client'
import { usePathname } from 'next/navigation'
import { House, ShoppingCart, Menu } from 'lucide-react' // ✅ Correct icon imports
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"

const navdata = [
    { id: 1, name: 'Home', link: '/', icon: <House className="mr-2" /> },
    { id: 2, name: 'Services', link: '/services', icon: <House className="mr-2" /> },
    { id: 3, name: 'Products', link: '/products', icon: <House className="mr-2" /> },
    { id: 4, name: 'About', link: '/about', icon: <ShoppingCart className="mr-2" /> },
    { id: 5, name: 'Contact', link: '/contact', icon: <House className="mr-2" /> },
]

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
                                <li key={item.id} className={`px-4 my-3 flex items-center rounded-md font-semibold hover:bg-orange-50 py-2 px-5 text-center 
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
