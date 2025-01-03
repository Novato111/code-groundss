import React from "react";

import {
  FileJson,
  FileType,
  FileCode,
  Cog,
  Binary,
  Cpu,
  Gem,
  Coffee,
  Scroll,
  Brackets,
} from "lucide-react";

interface LanguageLogoProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function LanguageLogo({ name, icon, color }: LanguageLogoProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
      >
        {icon}
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
const languages = [
  {
    name: "TypeScript",
    icon: <FileType className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FileJson className="w-8 h-8" />,
    color: "bg-yellow-500",
  },
  {
    name: "Python",
    icon: <FileCode className="w-8 h-8" />,
    color: "bg-green-500",
  },
  { name: "Rust", icon: <Cog className="w-8 h-8" />, color: "bg-orange-500" },
  { name: "Go", icon: <Binary className="w-8 h-8" />, color: "bg-cyan-500" },
  { name: "C++", icon: <Cpu className="w-8 h-8" />, color: "bg-purple-500" },
  { name: "Ruby", icon: <Gem className="w-8 h-8" />, color: "bg-red-500" },
  { name: "Java", icon: <Coffee className="w-8 h-8" />, color: "bg-amber-500" },
  { name: "Swift", icon: <Scroll className="w-8 h-8" />, color: "bg-pink-500" },
  {
    name: "PHP",
    icon: <Brackets className="w-8 h-8" />,
    color: "bg-indigo-500",
  },
];

export function Languages() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Write Code in Any Language
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our editor supports syntax highlighting, intelligent completions,
            and debugging for all major programming languages.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {languages.map((lang) => (
            <LanguageLogo
              key={lang.name}
              name={lang.name}
              icon={lang.icon}
              color={lang.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
