import clientPromise from "./mongodb";


const client = await clientPromise;
export const getEvents = async()=>{
    const db = client.db("event");
    const collection = db.collection("events");
    try{
        const data = await collection.find({}).toArray();
        let result=[];
        data.forEach((event) => {
            result.push({
                "_id":event._id,
                "name":event.eventName,
                "description":event.eventDescription,"thumbnail":event.eventThumbnail
            });
        });
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}

export const getVolunteer = async(lead)=>{
    const db = client.db("user");
    const collection = db.collection("users");
    try{
        const data = await collection.find({"role.isAdmin":lead}).toArray();
        let result=[];
        data.forEach((event) => {
            result.push({
                "_id":event._id,
                "name":event.name,
                "email":event.email,
                "position":event.role.position,
                "image":event.profilePic
            
            });
        });
        return result;
    }
    catch(err){
        console.log(err);
        return null;
    }
}