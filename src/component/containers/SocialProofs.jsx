import React, { useRef } from "react";
import Heading from "../shared/Heading";
import ProofCard from "../shared/ProofCard";
import Achievements from "../shared/Achievements";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const SocialProofs = () => {
  const myRef = useRef(null);

  const handleScroll = (side) => {
    if (side == "right") {
      myRef.current.scrollLeft += 256;
    } else {
      myRef.current.scrollLeft -= 256;
    }
  };

  return (
    <section className="wrapper flex-center">
      <div className="w-full lg:w-4/5 relative">
        <div className="social-proofs" />
        <div className="relative z-10 py-10 lg:py-16 flex-center flex-col overflow-hidden">
          <Heading title="See Why Our Clients Love Us" />
          <div className="w-full flex-center overflow-hidden mt-6 md:mt-10">
            <div className="w-full md:w-96 rounded-lg">
              <img
                src="/assets/happy-woman.jpg"
                alt="happy woman"
                className="object-cover w-full h-96"
              />
            </div>
            <div
              className="w-full -ml-16 overflow-x-scroll flex gap-6 pr-20 no-scrollbar custom-scrollbar py-2 relative scroll-smooth"
              ref={myRef}
            >
              <ProofCard
                text="I couldn’t have asked for a better team. They helped us sell our home quickly and above asking price!"
                name="Jane Doe"
                title="MD/CEO Leadway Assurance"
              />
              <ProofCard
                text="I couldn’t have asked for a better team. They helped us sell our home quickly and above asking price!"
                name="Jane Doe"
                title="MD/CEO Leadway Assurance"
              />
              <ProofCard
                text="I couldn’t have asked for a better team. They helped us sell our home quickly and above asking price!"
                name="Jane Doe"
                title="MD/CEO Leadway Assurance"
              />
              <ProofCard
                text="I couldn’t have asked for a better team. They helped us sell our home quickly and above asking price!"
                name="Jane Doe"
                title="MD/CEO Leadway Assurance"
              />
            </div>
            <div
              className="bg-blue-300 w-12 h-12 rounded-full shadow-lg flex-center absolute z-20 top-[45%] left-52 opacity-85 cursor-pointer"
              onClick={() => handleScroll("left")}
            >
              <BiCaretLeft size={14} color="white" />
            </div>
            <div
              className="bg-blue-300 w-12 h-12 rounded-full shadow-lg flex-center absolute z-20 top-[45%] right-3 opacity-85 cursor-pointer"
              onClick={() => handleScroll("right")}
            >
              <BiCaretRight size={14} color="white" />
            </div>
          </div>
          <Achievements />
        </div>
      </div>
    </section>
  );
};

export default SocialProofs;
