"use client";

import { useEffect, useState } from "react";
import Addevent from "../myComps/Addevent";
import { Toaster, toast } from "react-hot-toast";
import UploadImage from "../myComps/UploadImage";
import { Pencil,CalendarPlus,Upload,UserPen,Trash2} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Table ,TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//import { useUser } from "../myComps/UserContext";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState({});
  const [file, setFile] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/sentUser");
        const data = await res.json();
        setUser(data.user);
        setRole(data.user.role);
      } catch (err) {
        console.error("Error fetching user info:", err);
        toast.error("Failed to fetch user data.");
      }
    };

 const fetchAllUsers = async () => {
      try {
        const res = await fetch("/api/getAllUsers",{
          method: "GET",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setAllUsers(data.users);
      } catch (err) {
        console.error("Error fetching all users:", err);
        toast.error("Failed to fetch all users.");
      }
    };

    fetchAllUsers();
    fetchUser();
  }, []);
  



  const updateDp = async () => {
    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    if (!user._id) {
      toast.error("User ID is missing.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", user._id);

    try {
      await toast.promise(
        fetch("/api/PicUpdate", {
          method: "POST",
          body: formData,
        }),
        {
          loading: "Updating profile picture...",
          success: "Profile picture updated successfully!",
          error: "Failed to update profile picture.",
        }
      );
      setFile(null);
    } catch (error) {
      console.error("Error updating profile picture:", error);
      toast.error("Something went wrong during upload.");
    }
  };

  
  return (
    <>
      <section className="py-2 border">
        <div className="mt-20 px-4 md:px-20">
          <h1 className="text-5xl font-bold">
            Welcome <br /> {user.name}
          </h1>
          <p className="text-lg text-gray-700 mt-4">UUID: {user.id}</p>
          <p className="text-lg text-gray-700">Position: {role.position}</p>
        </div>
      </section>

      <section className=" mt-10 px-4 md:px-20">
        <h2 className="text-2xl font-bold">Tools</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-4">
        <div>
          
          <Dialog>
            <DialogTrigger className="bg-orange-500 text-white px-4 py-2 rounded-md inline-flex gap-2">
              
                <Pencil />
                Update Profile
              
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogDescription>Upload a new profile picture.</DialogDescription>
              </DialogHeader>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
              <DialogFooter>
                <Button onClick={updateDp}>Update Photo</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Add Event */}
        <div>
         
          <Dialog>
            <DialogTrigger className="bg-orange-500 text-white px-4 py-2 rounded-md gap-2 inline-flex">
              <CalendarPlus /><span>Add Event</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Event</DialogTitle>
                <DialogDescription>Add the event details below.</DialogDescription>
              </DialogHeader>
              <Addevent user={user} role={role} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Upload Image */}
        <div>
          <Dialog>
            <DialogTrigger className="bg-orange-500 text-white px-4 py-2 rounded-md inline-flex gap-2">
              <Upload/>Upload Image
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Image</DialogTitle>
                <DialogDescription>Upload event-related images.</DialogDescription>
              </DialogHeader>
              <UploadImage />
            </DialogContent>
          </Dialog>
        </div>
        {role.isAdmin && (
          <div>
          <Dialog className="w-[800px]">
            <DialogTrigger className="bg-orange-500 text-white px-4 py-2 rounded-md inline-flex gap-2">
               <UserPen />manage user
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Manage Users</DialogTitle>
                <DialogDescription>Manage user accounts and permissions.</DialogDescription>
              </DialogHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Sl no.</TableHead>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead className="w-[100px]">Email</TableHead>
                    <TableHead className="w-[100px]">Role</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allUsers.map((user,index) => (
                    <TableRow key={user.id}>
                      <TableCell>{index+1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        {/* Add your action buttons here */}
                      
                        <Button variant="destructive"><Trash2/></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Add your manage user component here */}
            </DialogContent>
          </Dialog>
        </div>
      )}

      <div>
        
      </div>
        
        </div>
      </section>

      <Toaster />
    </>
  );
}
