"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ProgressiveBlur } from "./ui/progressive-blur";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full border-b border-neutral-800 bg-black/60 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl relative">
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            w-full
            px-15
          "
        >
          {/* Left side - Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Popcorn Flix Logo"
              width={20}
              height={20}
              className="object-contain "
            />
            <span className="font-bold text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700">
              <Link href="/">POPCORN FLIX</Link>
            </span>
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-4 px-10">
            <Link href="/about" passHref>
              <Button
                variant="cinema"
                className="text-neutral-300 border-neutral-500 hover:bg-white hover:text-black"
                asChild
              >
                <span>About</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Progressive Blur Effects */}
        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-20"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-20"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </header>
  );
}
