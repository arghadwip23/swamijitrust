import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./myComps/Footer";
import Navb from "./myComps/Navb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import {UserProvider} from "./myComps/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value||null;
  let user = null;

  if(token){
    try {
      user = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      console.error("JWT verification error:", err);
      user=null;
    }
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-visible`}
      >
        <UserProvider user={user}>
        <Navb /> 
        {children}
        </UserProvider>
        <Footer />

      </body>
    </html>
  );
}


