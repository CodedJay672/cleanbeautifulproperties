import React from "react";
import Heading from "../shared/Heading";

const Experience = () => {
  return (
    <section className="wrapper flex-center flex-col">
      <div className="w-96">
        <Heading title="Everything You Need for a Stress-Free Realty Experience" />
      </div>
      <div className="flex gap-16 md:gap-20 lg:gap-24 flex-col lg:flex-row py-6 md:py-10 mt-4 md:mt-6">
        <div className="w-full lg:w-96">
          <ul className="list-disc">
            <li className="mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Personalized Consultation
              </h2>
              <p className="text-left">
                We listen to your goals and design a customized plan.
              </p>
            </li>
            <li className="mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Expert Negotiation
              </h2>
              <p className="text-left">
                We ensure you get the best deal, whether buying or selling.
              </p>
            </li>
            <li className="mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Comprehensive Market Analysis
              </h2>
              <p className="text-left">
                Get accurate insights to make confident decisions.
              </p>
            </li>
            <li className="mb-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Wide Property Network
              </h2>
              <p className="text-left">
                Access homes that meet your exact criteria.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-96 h-96">
          <img
            src="/assets/interview.svg"
            alt="side img"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
