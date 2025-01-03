import React from "react";

import { MacbookScroll } from "@/components/ui/macbook-scroll";

import { Code2, Users, Github } from "lucide-react";
import Marquee from "@/components/ui/marquee";

import { Frameworks } from "./_components/Framework";

import LanguageLogo, { Languages } from "./_components/Languages";
import Link from "next/link";
export default function Page() {
  return (
    <div className="bg-[#0B0B0F] text-white">
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        {/* Stars effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600&q=80')] bg-cover opacity-10" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Top badge */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 transition-colors mb-8 border border-white/10"
          >
            <span className="flex items-center gap-1">
              {" "}
              Code with Community
            </span>
            <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs"></span>
          </a>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Code Together.
            <br />
            Build Together.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
            A powerful web-based code editor built for collaboration. Write,
            share, and learn with developers from around the world.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Link href="/grounds"> click here to start →</Link>
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/10"></button>
          </div>

          {/* Stats */}
          <div className="bg-transparent">
            <Frameworks></Frameworks>
          </div>
        </div>
      </div>
      {/* Hero Section */} <Languages></Languages>
      {/* MacbookScroll Section */}
      <div className=" h-full ">
        <MacbookScroll
          title={
            <span className="text-white">A Code Editor in Your Browser</span>
          }
          src={`/new.png`}
          showGradient={false}
        />
      </div>
    </div>
  );
}
