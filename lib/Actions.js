'use server'
import { clientPromise } from "./mongodb"

export async function signup(formData){
    
    try{
        await console.log(formData.get('name'));
        
    }catch{
        console.log("err");
        
    }

}