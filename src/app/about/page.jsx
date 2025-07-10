import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='bg-black min-h-screen px-4 md:px-20 flex items-center justify-center'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-12 max-w-5xl w-full py-16'>
        {/* Text Block */}
        <div className='flex-1 flex flex-col justify-center items-start gap-6 mt-8'>
          <h1 className='font-bold text-4xl md:text-5xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-700 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-red-800 hover:via-red-600 hover:to-red-400 cursor-pointer'>ABOUT</h1>
          <p className='text-lg md:text-xl leading-relaxed max-w-xl text-gray-400'>
            Popcorn Flix is a modern movie review platform inspired by IMDb, designed to help you discover, rate, and discuss your favorite films. It offers a sleek, user-friendly interface for browsing movie details, reading and writing reviews, and finding recommendations tailored to your taste. Whether you're a casual viewer or a film buff, Popcorn Flix makes it easy to explore new releases, classics, and hidden gems—all in one place. Join the community and make your next movie night unforgettable!
          </p>
        </div>
        {/* Image Block */}
        <div className='flex-1 flex justify-center items-center -mt-16'>
          <Image src="https://i.pinimg.com/736x/e6/8a/a9/e68aa9eec22fc15b09b8aa08702129a8.jpg" alt="about" width={400} height={100} className='rounded-xl shadow-lg object-cover'/>
        </div>
      </div>
    </main>
  )
}
