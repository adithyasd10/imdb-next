"use client";
import React from "react";
import { Button } from "./ui/button";
import { ProgressiveBlur } from "./ui/progressive-blur";

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
            px-15   /* ← ADD THIS */
          "
        >
          {/* Left side - Logo */}
          <h1 className="text-white font-bold text-xl tracking-wide">
            IMDB NEXT
          </h1>

          {/* Right side - Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="cinema"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Reviews
            </Button>
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
