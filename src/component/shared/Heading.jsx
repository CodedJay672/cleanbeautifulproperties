import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-blue-300 text-xl md:text-2xl font-bold text-center">
      {title}
    </h2>
  );
};

export default Heading;
