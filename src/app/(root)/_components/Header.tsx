import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2, Sparkles } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import RunButton from "./RunButton";
import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import HeaderProfileBtn from "./HeaderProfileBtn";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <header className="relative z-10 items-center  ">
      <div
        className="bg-black/80 border border-purple-400
       
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
backdrop-blur-sm
         flex items-center lg:justify-between justify-center p-6 mb-4 rounded-3xl"
      >
        {/* Left Section - Logo and Navigation */}
        <div className="hidden lg:flex items-center gap-8 ">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 group relative",
              "transition-all duration-300 hover:scale-[1.02]"
            )}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <div
              className={cn(
                "relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl",
                "ring-1 ring-white/10 group-hover:ring-white/20 transition-all",
                "shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/10"
              )}
            >
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                CodeGrounds
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className={cn(
                "relative group flex items-center gap-2 px-4 py-1.5 rounded-lg",
                "text-gray-300 bg-gray-800/50 hover:bg-blue-500/10",
                "border border-gray-800 hover:border-blue-500/50",
                "transition-all duration-300 shadow-lg overflow-hidden"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </nav>
        </div>
        <SignedIn>
          <RunButton />
        </SignedIn>
        <SignedOut>
          <div className="border  font-bold rounded-lg p-3text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {" "}
            <SignInButton></SignInButton>
          </div>
        </SignedOut>
        {/* Right Section - Controls and Profile */}
        <div className="flex items-center gap-4 ">
          {/* Theme and Language Controls */}
          <div className="flex items-center gap-3 ">
            <ThemeSelector />
            <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
          </div>

          {/* Pro Subscription Button */}
          {!convexUser?.isPro && (
            <RainbowButton className="w-24">
              {" "}
              <Link
                href="/pricing"
                className={cn("items-center flex gap-2 font-bold ")}
              >
                <Sparkles className="  text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="text-sm">Pro</span>
              </Link>
            </RainbowButton>
          )}

          {/* Run Button (Only for signed-in users) */}

          {/* Profile Button */}
          <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
