import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

function Hero() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center">
      <div className="pb-16 pt-4 md:pb-24 md:pt-8 lg:pb-56 lg:pt-24">
        <div className="relative mx-auto max-w-6xl flex flex-col px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Text Block */}
          <div className="mx-auto w-full max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1
              className="
                pt-20
                mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-6xl
                font-bold
                tracking-wider
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#4fc3f7]
                via-[#9c27b0]
                to-[#ec407a]
                hover:from-[#ec407a]
                hover:via-[#4fc3f7]
                hover:to-[#9c27b0]
                transition-all
                duration-500
              "
            >
              Lights. Camera. Popcorn Flix!
            </h1>

            <p className="mt-6 sm:mt-8 max-w-2xl text-pretty text-base sm:text-lg">
              Discover reviews, ratings, and recommendations to help you pick your next favorite movie.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center  gap-3 sm:gap-4 items-center sm:justify-center md:justify-center lg:justify-start">
              <Link href="/reviews" className="group relative inline-block w-full sm:w-40">
                <span
                  className="
                    absolute
                    inset-0
                    rounded-md
                    bg-gradient-to-r
                    from-[#4fc3f7]
                    via-[#9c27b0]
                    to-[#ec407a]
                    blur-sm
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:blur-md
                    group-hover:opacity-100
                  "
                ></span>
                <span
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-full
                    rounded-md
                    py-2
                    bg-black
                    font-semibold
                    text-white
                    border-2
                    border-transparent
                    group-hover:border-[#ec407a]
                    transition-all
                    duration-500
                  "
                >
                  Reviews →
                </span>
              </Link>

              <Button className="w-full sm:w-40 h-11" variant="Outline" asChild>
                <Link href="/reviews">Dive in</Link>
              </Button>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="mt-12 sm:mt-16 lg:mt-8 lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-0">
            <Image
              src="https://i.pinimg.com/1200x/a2/ac/7f/a2ac7f539a5958cd232d3ea942a86914.jpg"
              alt="Pinterest Image"
              width={1200}
              height={800}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
