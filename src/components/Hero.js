import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center ">
      <div className="pb-24 pt-4 md:pb-32 lg:pb-56 lg:pt-24">
        <div className="relative mx-auto max-w-6xl flex flex-col px-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Text Block */}
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
              Lights. Camera. Popcorn Flix!
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              Discover reviews, ratings, and recommendations to help you pick your next favorite movie.
            </p>
            <div className="mt-6 flex flex-row justify-start gap-2 items-center">
              <Button className="w-40" >Reviews</Button>
              <Button className="w-40" variant="cinema">Dive In</Button>
            </div>
          </div>
          {/* Right Image Block */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-end">
            <Image
              src="https://i.pinimg.com/736x/29/0d/54/290d546e93a638bbfc993ae4c189effd.jpg"
              alt="Pinterest Image"
              width={1200}
              height={800}
              className="w-full max-w-xl h-auto rounded-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
