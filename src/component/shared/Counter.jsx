import React, { useEffect, useState } from "react";

const Counter = ({ count, text }) => {
  const [countNumber, setCountNumber] = useState(0);

  let countInt = parseInt(count);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countInt > countNumber) {
        setCountNumber(countNumber + 1);
      }
    }, 1000 / countInt);

    return () => clearInterval(interval);
  }, [countInt, countNumber]);

  return (
    <div className="w-44 flex-center flex-col">
      <h2 className="text-xl font-bold">{countNumber}</h2>
      <p className="text-sm text-start font-medium">{text}</p>
    </div>
  );
};

export default Counter;
