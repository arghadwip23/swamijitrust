import React from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import { BadgeCheckIcon, BadgeCheck } from 'lucide-react';


export default function Profile({ name, position, image, email }) {
    return (
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-24 w-24 shrink-0 mx-auto sm:mx-0">
                <Image
                    src={image}
                    alt={"Profile picture of " + name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">

                    <span className="text-lg text-black font-semibold inline-flex items-center gap-1 flex-wrap">
                        {name}
                        <BadgeCheck className="w-4 h-4 text-orange-500" />
                    </span>
                    <p className="text-slate-500 font-medium">{position}</p>
                    {/* <p className="text-slate-400 text-sm">{email}</p> */}
                </div>
                <a href={`mailto:${email}`}  >
                    <button className="px-4 mt-2 py-1 text-sm text-orange-600 font-semibold rounded border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
                        Message
                    </button>
                </a>
            </div>
        </div>
    );
}