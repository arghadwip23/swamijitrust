"use client"

import { useEffect, useState } from "react";
import Addevent from "../myComps/Addevent";
import { Toaster } from "react-hot-toast";



export default function Dashboard() {
const [user,setUser] = useState({});
const [role,setRole] = useState({});

useEffect(() => {   
    const fetchUser = async () => {
        try {
            const res = await fetch('/api/sentUser', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data); // Do something with the data
            setUser(data.user);
            setRole(data.user.role);
        } catch (err) {
            console.error('Error fetching user info:', err);
        }
    };
    fetchUser();
}
, []);

    return (
        <>
           <section className="py-2 border">
                <div className=" mt-20 px-4 md:px-20">
                   
                    <h1 className="text-5xl font-bold ">Well Come <br /> Mr. {user.name}</h1>
                    <p className="text-lg text-gray-700 mt-4">uiid {user.id}</p>
                    <p className="text-lg text-gray-700">position: {role.position}</p>
                    
                </div>
           </section>
           <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-20">
            <Addevent user={user} role={role}></Addevent>

           </section>
          <Toaster/>
        </>

    )
}
