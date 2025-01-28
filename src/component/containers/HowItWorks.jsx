import React from "react";
import WorksItem from "../shared/WorksItem";

const HowItWorks = () => {
  return (
    <section className="wrapper bg-blue-300  my-10 flex-center">
      <div className="w-full md:w-4/5 flex-center flex-col">
        <h2 className="text-blue-200 text-xl md:text-2xl font-bold text-center">
          How It Works
        </h2>
        <p className="text-blue-50 text-base md:text-lg lg:text-xl text-center">
          Your Journey to Real Estate Success, Simplified
        </p>
        <div className="py-10 md:py-16 lg:py-20 flex">
          <WorksItem
            number="01"
            heading="Book Your Consultation"
            text="Tell us your goals, and we’ll create a customized plan."
          />
          <WorksItem
            number="02"
            heading="Property Search or Listing Prep"
            text="We’ll help you find the perfect property or prepare your home to sell for top dollar."
          />
          <WorksItem
            number="03"
            heading="Negotiation & Closing"
            text="We’ll handle the details to ensure a smooth, stress-free experience."
          />
        </div>
        <button className="btn-secondary">Schedule Consultation</button>
      </div>
    </section>
  );
};

export default HowItWorks;
