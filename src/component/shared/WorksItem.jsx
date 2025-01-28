import React from "react";

const WorksItem = ({ number, heading, text }) => {
  return (
    <article className="w-full md:w-96 p-6 md:p-7 lg:p-8 flex">
      <h1 className="text-[100px] text-blue-200 font-bold opacity-60">
        {number}
      </h1>
      <div className="-ml-12 relative z-20">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-50">
          {heading}
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-blue-50 font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </article>
  );
};

export default WorksItem;
