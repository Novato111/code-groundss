import React from "react";

import {
  IconBrandCpp,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandRust,
  IconBrandTypescript,
} from "@tabler/icons-react";
interface FrameworkLogoProps {
  name: string;
  icon: React.ReactNode;
}

export function FrameworkLogo({ icon }: FrameworkLogoProps) {
  return (
    <div className="flex items-center justify-center w-16 h-16 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
      {icon}
    </div>
  );
}
export function Frameworks() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Works with your favorite</span>
          <br />
          <span className=" p-2 inline-block bg-gradient-to-r from-teal-400 to-teal-500 text-transparent bg-clip-text mt-2">
            Programming Languages
          </span>
        </h2>

        <p className="text-gray-400 text-xl mb-16 max-w-3xl mx-auto">
          Our editor provides a consistent developer experience for most modern
          frameworks
        </p>

        {/* Framework logos */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-16 max-w-3xl mx-auto">
          <FrameworkLogo
            name="javascript.js"
            icon={<IconBrandJavascript className="w-8 h-8 text-white" />}
          />
          <FrameworkLogo
            name="typescript"
            icon={<IconBrandTypescript className="w-8 h-8 text-white" />}
          />
          <FrameworkLogo
            name="Rust"
            icon={<IconBrandRust className="w-8 h-8 text-white" />}
          />
          <FrameworkLogo
            name="Python"
            icon={<IconBrandPython className="w-8 h-8 text-white" />}
          />
          <FrameworkLogo
            name="Astro"
            icon={<IconBrandCpp className="w-8 h-8 text-white" />}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
