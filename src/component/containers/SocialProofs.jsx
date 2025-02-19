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
                name="Mike Andersan"
                title="Home Ownner"
              />
              <ProofCard
                text="Clean beautiful properties encouraged me to buy a property from Highbridge homes back in 2010. Today that property is worth 3 times the amount I bought it for."
                name="Florence Okafor"
                title="Business Owner"
              />
              <ProofCard
                text="I would recommend clean beautiful properties to anyone looking to buy a property. They are professional and very efficient."
                name="Anita Johnson"
                title="Real estate agent"
              />
              <ProofCard
                text="My client was very happy with the property I sold to him. He was so happy that he referred me to his friends and family."
                name="Samuel Amos"
                title="No. 1 Realtor"
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
