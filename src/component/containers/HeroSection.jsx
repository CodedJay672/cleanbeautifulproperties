import React from "react";
import Button from "../shared/Button";

const HeroSection = () => {
  return (
    <header className="w-full h-dvh relative flex flex-col">
      <div className="hero-curve px-4 md:px-6 lg:px-10 xl:px-20 overflow-hidden">
        <div className="py-3 lg:py-5 flex justify-between items-center relative z-10">
          <div className="w-10 h-10 rounded-full">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full relative md:w-3/4 lg:w-[30rem] flex flex-col gap-4 md:gap-6 z-10 mt-10 md:mt-20">
            <div className="w-full">
              <h1 className="text-blue-300 font-bold text-2xl md:text-3xl lg:text-6xl">
                Find Your Dream Home With{" "}
              </h1>
              <h1 className="text-gold font-bold text-2xl md:text-3xl lg:text-5xl">
                Trusted Experts.
              </h1>
            </div>
            <p className="text-[10px] md:text-sm">
              Connecting buyers and sellers with personalized expertise, market
              insights, and a commitment to excellence
            </p>
            <Button text="Schedule Consultation" />
          </div>
          <div className="absolute hidden md:block -top-10 -right-24 w-[700px]">
            <img
              src="/assets/hero-image.png"
              alt="hero-image"
              className="w-[800px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-[999] top-72 right-20 w-[640px] h-[300px] overflow-hidden rounded-lg shadow-2xl shadow-blue-300">
        <img
          src="/assets/hero-home.jpg"
          alt="hero-home"
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default HeroSection;
