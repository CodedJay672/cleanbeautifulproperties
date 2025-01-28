import React from "react";
import Button from "../shared/Button";
import { navLinks } from "../../constants";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";

const HeroSection = () => {
  return (
    <header className="w-full h-dvh relative flex flex-col" id="home">
      <div className="hero-curve px-4 md:px-6 lg:px-10 xl:px-20 overflow-hidden">
        <div className="w-full py-2 flex justify-between items-center relative z-10 backdrop-blur-md">
          <div className="flex-center">
            <img src="/assets/logo.png" alt="footer logo" className="size-8" />
            <div className="pt-1">
              <h3 className="text-xs md:text-sm lg:text-[24px] font-bold text-blue-300 tracking-[11px]">
                CLEAN
              </h3>
              <p className="text-[6px] md:text-sm font-semibold tracking-tight">
                Beautiful Properties
              </p>
            </div>
          </div>
          <ul className="list-none p-2 flex justify-between items-center">
            {navLinks.map((link) => (
              <li className="text-sm py-2 px-4 font-semibold" key={link.link}>
                <a href={link.link}>{link.lable}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 my-2">
            <a href="https://facebook.com" target="_blank">
              <RiFacebookCircleFill
                size={21}
                className="text-gold fill-blue-300"
              />
            </a>
            <a href="https://youtube.com" target="_blank">
              <RiYoutubeFill size={21} className="text-gold fill-blue-300" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <RiInstagramFill size={21} className="text-gold fill-blue-300" />
            </a>
            <a href="https://tiktok.com" target="_blank">
              <RiTiktokFill size={21} className="text-gold fill-blue-300" />
            </a>
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
