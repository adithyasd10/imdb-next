"use client";
import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-neutral-800">
      {/* Blur overlays go OUTSIDE the content block */}
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

      {/* Background layer */}
      <div className="bg-black/60 backdrop-blur-lg relative">
        {/* Add horizontal padding so content doesn't sit under blur */}
        <div className="mx-auto max-w-6xl px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold tracking-wide text-white">
            IMDB NEXT
          </h1>
          <div className="flex flex-col items-center text-sm text-neutral-400">
            <h2 className="text-white font-semibold">
              Adithya S D
            </h2>
            <p>adithyasd@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
