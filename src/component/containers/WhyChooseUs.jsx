import React from "react";
import Heading from "../shared/Heading";
import ChooseItem from "../shared/ChooseItem";
import Button from "../shared/Button";

const WhyChooseUs = () => {
  return (
    <section className="wrapper flex-center flex-col" id="why-choose-us">
      <Heading title="Why Choose Us" />
      <p className="text-center mt-4 w-[484px]">
        join real estate developers and investors all over the world to make
        your investment count. Invest with us and enjoy peace of mind
      </p>
      <div className="w-full lg:w-3/4 bg-blue-100 rounded-lg p-10 mt-4 flex-center flex-col">
        <div className="w-full flex gap-6 md:gap-10 lg:gap-14 flex-wrap lg:flex-nowrap items-stretch">
          <ChooseItem
            title="P1"
            text="Local Market Expertise"
            bgColor="#6C8DACA3"
          />
          <ChooseItem
            title="P2"
            text="Tailored Solutions For Your Needs"
            bgColor="#5E5FA4A3"
          />
          <ChooseItem
            title="P3"
            text="Access to Exclusive Listings"
            bgColor="#E0B435A3"
          />
          <ChooseItem
            title="P4"
            text="Dedicated Support From Start To Finish"
            bgColor="#D6C3A9A3"
          />
        </div>
        <p className="text-center mt-4 w-[484px]">
          Ready to experience the difference? Schedule your consultation now!
        </p>
        <div className="mt-4">
          <Button text="Schedule Consultation" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
