"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {React} from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function signUp(){
 const [formData,setFormData] = useState({name:"test",email:"tset",password:"tst"});

 const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password} = formData;
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
  }
 

 return(
  <section className=" p-4">
    <div className={`mt-20 p-4`}>
    <h1 className={`font-semibold text-xl mb-4`}>SignUP</h1>
      
      <form className={` p-4 bg-orange-50 gap-4 mx-auto grid md:grid-cols-2`}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name={`name`} className={`md:w`} placeholder="enter name" onChange={(e)=>{setFormData({...formData,name:e.target.value})}}></Input>
        </div>
        <div>
          <Label htmlFor="emaile">Email</Label>
          <Input type="email" name="emaile" placeholder={`enter email`} className="md:w" ></Input>
        </div>
        <div>
          <Label htmlFor="password">password</Label>
          <Input type="password" name="password" placeholder="enter password"></Input>
        </div>
        <div>
          <Label htmlFor="confirmpass"> confirm Password</Label>
          <Input name="confirmpass" type ='password' placeholder="enter confirm password"></Input>

        </div>
        <div>
          <Button onClick={handleSubmit}>submit</Button>
        </div>

      </form>
    </div>
  </section>
 )
}