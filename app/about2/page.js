import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  Eye,
  HeartHandshake,
  Users,
  Globe,
  Target,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-700 min-h-[80vh] flex flex-col justify-center text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-orange-200 text-sm mb-4">
              <span>Home</span> <span className="mx-2">/</span> <span>About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-orange-100">
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

      {/* Main Content Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-gray-600">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">Full About Us Page Coming Soon</h2>
        <p className="text-lg">
          We're currently revamping our story with more content, photos, and impact
          metrics. Stay tuned!
        </p>
      </div>
    </div>
  );
}
