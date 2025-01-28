import React from "react";
import Counter from "./Counter";

const Achievements = () => {
  return (
    <div className="w-3/4 bg-blue-200 rounded-xl px-6 md:px-10 lg:px-16 py-5 flex justify-around items-center flex-col lg:flex-row mt-10">
      <Counter count="300+" text="Homes Sold" />
      <Counter count="98%" text="Client Satisfaction" />
      <Counter count="24Hrs" text="Customer Support" />
    </div>
  );
};

export default Achievements;
