import React from "react";
import Heading from "../shared/Heading";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const AboutUs = () => {
  return (
    <section className="wrapper flex-center flex-col">
      <div className="w-full lg:w-4/5 relative">
        <div className="about-section h-[300px] flex gap-5 pt-10">
          <img
            src="/assets/team.png"
            alt="team"
            className="w-1/2 object-cover"
          />
          <img
            src="/assets/neighborhood.png"
            alt="neightborhood"
            className="w-1/2 object-cover"
          />
        </div>
        <div className="absolute z-10 py-10 lg:py-16 top-0 left-0 w-full flex-center">
          <Heading title="About Us" />
        </div>
      </div>
      <div className="w-full p-10 md:p-12 lg:p-14 flex-center">
        <div className="w-full md:w-4/5 lg:w-1/2">
          <div className="flex justify-start">
            <ImQuotesLeft size={84} color="#bfd1e62a" />
          </div>
          <p className="text-center font-bold text-lg md:textxl">
            At clean Beautiful Properties Lilmited, we’ve been helping clients
            find their perfect homes for over 4 years.
            <br />
            <br />
            Our mission is simple: to make real estate seamless and stress-free.
            With a team of dedicated experts, we pride ourselves on
            transparency, trust, and delivering exceptional results every step
            of the way.
            <br />
            <br />
            <span className="font-medium text-sm md:text-md"> - MD/CEO</span>
          </p>
          <div className="flex justify-end">
            <ImQuotesRight size={84} color="#bfd1e62a" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/5 h-16 lg:h-20 bg-blue-300 rounded-lg flex-center gap-6 md:gap-10">
        <div className="">
          <h3 className="text-gold font-semibold text-lg md:text-xl">
            Get to know us better
          </h3>
          <p className="text-blue-200 text-sm md:text-base">
            schedule your consultation today!
          </p>
        </div>
        <button className="btn-secondary">Schedule Consultation</button>
      </div>
    </section>
  );
};

export default AboutUs;
