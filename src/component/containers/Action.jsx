import React from "react";
import Heading from "../shared/Heading";

const Action = () => {
  return (
    <section className="wrapper flex-center flex-col lg:flex-row gap-20 lg:gap-64">
      <div className="flex-center flex-col w-full lg:w-1/3">
        <Heading title="Don't Wait, Take Action." />
        <h2 className="text-lg md:text-xl text-center mt-2">
          Get a free personalized market analysis!
        </h2>
        <p className="text-center mt-3">
          Take the first step toward your dream home. Book your free
          consultation today!
        </p>
        <button className="btn-primary mt-4">Schedule a Consultation</button>
      </div>

      <ul className="list-disc w-full lg:w-1/3">
        <li className="text-sm md:text-base mt-4 leading-4 md:leading-6">
          Get personalized investment plan that meets feets your financial
          status.
        </li>
        <li className="text-sm md:text-base mt-4 leading-4 md:leading-6">
          Enjoy up to 50% return when you key into our buy bank plans.
        </li>
        <li className="text-sm md:text-base mt-4 leading-4 md:leading-6">
          Get up-to-date investment advise, with detailed information about
          potential destinations that will yield a high ROI in the nearest
          future.
        </li>
        <li className="text-sm md:text-base mt-4 leading-4 md:leading-6">
          Get constant positive feedback regarding any investment clarification
          or geographical location you might want to invest your money into.
        </li>
      </ul>
    </section>
  );
};

export default Action;
