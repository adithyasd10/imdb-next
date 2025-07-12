"use client";
import Image from "next/image";
import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="relative w-full border-t border-neutral-800">
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

      <div className="bg-black relative">
        <div className="mx-auto max-w-6xl px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
