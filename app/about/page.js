"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TrustBadges from "../myComps/Badge";
import Image from "next/image";
import LegalDocuments from "../myComps/LegalDocuments";
import {BadgeCheck,
  ShieldCheck,
  Eye,
  HeartHandshake,
  Users,
  Globe,
  Target,} from "lucide-react";

export default function AboutPage() {


  const links = [
    { label: "Our Mission", href: "#mission" },
    { label: "Our Team", href: "#team" },
    { label: "Our Impact", href: "#impact" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact Info", href: "#contact" },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
     <section className="  min-h-[80vh] flex flex-col justify-center aboutHeader text-black py-16">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-orange-200 text-sm mb-4">
              <span>Home</span> <span className="mx-2">/</span> <span>About Us</span>
            </nav>
            <h1 className="text-4xl md:text-6xl text-gray-700 font-bold mb-4">
              Our Story of Hope & Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light italic">
              "From humble beginnings in Bogra Colony to a growing mission of hope – discover the journey we're building together."
            </p>
            <p className="text-lg max-w-4xl mx-auto mb-8">
              Founded by passionate young changemakers in Asansol, Swamiji Trust has
              grown from a small group of dedicated individuals into a determined force
              for positive change in our community.
            </p>

            {/* Badge Section */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-orange-500" />
                Registered NGO
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                12A & 80G Certified
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                <Eye className="w-4 h-4 text-orange-500" />
                100% Transparent Operations
              </div>
            </div>

            {/* Core Message Highlights */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-orange-700">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" /> Growing Impact
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Dedicated Volunteers
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" /> Community Focused
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> Building Tomorrow Together
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <div className=" flex justify-center gap-4 items-start">
        <aside className=" hidden md:inline-block bg-gray-50 p-4 border rounded-xl shadow-sm sticky top-6 mt-20 ">
          <h2 className="text-lg font-semibold mb-4">On This Page</h2>
          <nav className="space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>

        <section className=" text-gray-800 p-6 md:p-12 max-w-4xl ">
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold text-orange-500 mb-4">About Swamiji Trust</h1>

              <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-2">Our Story</h2>
              <p className="text-lg">
                Swamiji Trust emerged from the hearts and minds of passionate young visionaries in Bogra Colony, Asansol, who witnessed the stark realities of inequality in their community. Founded with an unwavering commitment to social justice, our organization represents more than just an NGO—we are a movement of hope, change, and transformation.
                What began as a small group of dedicated individuals sharing a common dream has evolved into a beacon of hope for hundreds of families across our region. Our founders, driven by the belief that every individual deserves dignity, opportunity, and a chance to thrive, established Swamiji Trust to bridge the widening gap between privilege and poverty.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-2">Our Mission</h2>

              <p className="text-lg">Our mission is multifaceted and deeply rooted in sustainable development:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>Education as Liberation:</strong> We believe education is the most powerful tool for breaking the cycle of poverty. Through our comprehensive educational programs, we provide free schooling, tutoring, and skill development opportunities to children and adults who cannot afford quality education.</li>
                <li><strong>Social Welfare & Community Support:</strong> We work tirelessly to create a safety net for the most vulnerable members of our society, ensuring that basic human needs are met with dignity and respect.</li>
                <li><strong>Empowerment Through Opportunity:</strong> We don't just provide aid—we create pathways for individuals and families to become self-reliant and empowered contributors to their communities.</li>
                <li><strong>Sustainable Impact:</strong> Every initiative we undertake is designed with long-term sustainability in mind, ensuring that our interventions create lasting positive change rather than temporary relief.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-2">Our Team & Governance</h2>
              <p className="text-lg">Swamiji Trust is governed by a dedicated board of trustees comprising individuals from diverse professional backgrounds, including education, healthcare, social work, and business. Our operational team consists of:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>Full-time Staff:</strong> Experienced professionals in social work, education, and community development</li>
                <li><strong>Volunteer Network:</strong>  Over 100 active volunteers who contribute their time and expertise</li>
                <li><strong>Advisory Committee:</strong> Subject matter experts who guide our program strategies</li>
                <li><strong>Community Champions:</strong> Local leaders who help us understand and address grassroots needs</li>
              </ul>
            </div>

            <div>
             
              <LegalDocuments />
            </div>





         

          </div>
        </section>

      </div>
       <section className="text-center bg-gradient-to-r from-orange-400 to-orange-700 text-white   p-4 py-10 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Swamiji Trust is more than an organization—we are a family united by the shared belief that every individual deserves a chance to succeed. Whether you choose to volunteer your time, donate resources, or simply spread awareness about our cause, you become part of a movement that is transforming lives and building stronger communities.
          </p>
          <p className="text-lg italic mb-8">
            "Service to humanity is service to divinity" - This principle guides everything we do at Swamiji Trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Join Our Mission
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition duration-300">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition duration-300">
              Volunteer With Us
            </button>
          </div>
        </section>
    </div>
  );
}
