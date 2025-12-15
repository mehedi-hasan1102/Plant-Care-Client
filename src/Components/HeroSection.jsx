
import React from "react";

export default function HeroVideo() {
  return (
    <section
      className="relative w-full h-[45vh] sm:h-[50vh] md:h-[80vh] lg:h-[90vh] max-h-screen overflow-hidden shadow-2xl mt-6"
      aria-label="Hero Section: Plant Care App"
    >
      {/* Background video */}
      <video
        className="w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay gradients (top & bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-white font-extrabold tracking-wide drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Nurture Your Greens
        </h1>
        <p className="mt-4 text-white font-light drop-shadow-sm max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Track every watering, mist, and feed with ease – your complete plant care companion.
        </p>
      </div>
    </section>
  );
}
