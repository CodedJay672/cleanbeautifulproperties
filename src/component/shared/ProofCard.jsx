import React from "react";
import { CgProfile } from "react-icons/cg";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const ProofCard = ({ text, name, title }) => {
  return (
    <div className="min-w-64 h-80 rounded-xl bg-subtle-light opacity-90 p-6 z-20 shadow-lg flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-between">
        <div className="w-full flex justify-start -mb-10">
          <ImQuotesLeft size={84} color="#bfd1e62a" />
        </div>
        <p className="text-lg text-center leading-4 tracking-wider font-semibold">
          {text}
        </p>
        <div className="w-full flex justify-end -mt-10">
          <ImQuotesRight size={84} color="#bfd1e62a" />
        </div>
      </div>
      <div className="flex-center gap-1">
        <div className="w-10 h-10 flex-center rounded-full">
          <CgProfile className="text-blue-200 w-full h-full" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold leading-4">{name}</h3>
          <p className="text-xs text-left">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProofCard;
