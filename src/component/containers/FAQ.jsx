import React, { useState } from "react";
import Heading from "../shared/Heading";
import { FAQItems } from "../../constants";
import { IoCaretDownOutline } from "react-icons/io5";

const FAQ = () => {
  const [qstIndex, setQstIndex] = useState(null);

  const handleQstChange = (index) => {
    setQstIndex(index);
  };

  return (
    <section className="wrapper flex-center flex-col">
      <Heading title="FAQ" />
      <div className="w-full md:w-4/5 lg:w-3/5">
        {FAQItems.map((item, idx) => (
          <div
            key={idx}
            className="hover:bg-blue-50 cursor-pointer rounded-lg transition-all py-2 px-4 my-6 md:my-7 lg:my-8"
            onClick={() => handleQstChange(idx)}
          >
            <div className="flex-center">
              <p className="text-blue-300 text-sm md:text-base lg:text-lg flex-1">
                {item.question}
              </p>
              <IoCaretDownOutline size={10} className="text-blue-300 ml-20" />
            </div>
            <p
              className={`text-gray-600 text-xs md:text-sm lg:text-base transition-all ${
                qstIndex === idx ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
