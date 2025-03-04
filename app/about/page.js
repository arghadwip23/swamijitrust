"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-orange-200">
        <div className="absolute inset-0">
          <Image
            src="/banner3.png" // Replace with your actual image
            alt="About Swamiji Trust"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-orange-500">
            About Us
          </h1>
          <p className="text-lg text-gray-700 px-4 mt-2 lg:mx-20 lg:px-20">
          We are a passionate team dedicated to making a difference in the lives of underprivileged children through education, healthcare, and support.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-left text-orange-600">
          Who We Are
        </h2>
        <Separator className="my-4" />
        <p className="text-gray-700 text-lg text-left leading-relaxed">
          Swamiji Trust is a passion-driven NGO founded by young, dedicated
          individuals in Bogra Colony, Asansol, with a mission to uplift
          society through education, social welfare, and community support.
          We believe in creating opportunities for the underprivileged,
          ensuring that every person, regardless of their background, has a
          chance to lead a better life.
        </p>

        <p className="text-gray-700 text-lg text-left mt-4 leading-relaxed">
          Our efforts focus on empowering children, supporting needy
          families, and fostering cultural and social development through
          various initiatives. We organize sports and cultural events,
          providing platforms for children and youth to showcase their talents.
          Our support extends to needy students through free education,
          helping them gain knowledge and confidence for a brighter future.
        </p>

        <p className="text-gray-700 text-lg text-left mt-4 leading-relaxed">
          Additionally, we assist struggling families with essential
          resources, including food, clothing, and medical aid. Our goal is
          to bridge the gap between privilege and poverty, ensuring no one
          is left behind.
        </p>

        {/* Mission & Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Card className="p-4 shadow-lg border-orange-400">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-orange-500">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to uplift lives through education, social
                welfare, and empowerment programs that create sustainable
                impact for the underprivileged.
              </p>
            </CardContent>
          </Card>

          <Card className="p-4 shadow-lg border-orange-400">
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-orange-500">
                Our Impact
              </h3>
              <p className="text-gray-600">
                With the support of our donors and volunteers, we have brought
                hope to countless individuals, improving education, health,
                and social well-being in our communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Transparency & Call to Action */}
        <div className="text-left mt-10">
          <h3 className="text-2xl font-semibold text-orange-600">
            Transparency & Dedication
          </h3>
          <p className="text-gray-700 mt-2">
            At Swamiji Trust, transparency is at the core of everything we
            do. We regularly update our donors on how their contributions are
            making a difference.  
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-orange-600">
            Join Our Mission
          </h3>
          <p className="text-gray-700 mt-2">
            Together, we can create a more compassionate and empowered
            society. Join hands with us, contribute, and help bring a
            meaningful change!
          </p>
          <Button className="mt-4 bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">
            Donate Now
          </Button>
        </div>
      </section>
    </div>
  );
}
