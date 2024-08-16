import React from 'react'
import About from '../assets/about.png'

export default function AboutPage() {
  return (
    <div id='about' className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      {/* Kolom Kiri - Gambar */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={About}
          alt="About"
          className="rounded-lg max-w-full"
        />
      </div>

      {/* Kolom Kanan - Paragraf */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          vestibulum lorem. Vestibulum et erat vel nulla posuere laoreet.
          Suspendisse potenti. Curabitur ut ultrices risus. Nam vel nibh nec
          quam vehicula fringilla. Quisque scelerisque turpis ac magna
          tristique, a eleifend libero dictum.
        </p>
      </div>
    </div>
  )
}
