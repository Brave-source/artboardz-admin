import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-[#F8FAFC] rounded-lg w-[97%] shadow-card h-[95%] mx-auto max-w-[1200px]">
      {children}
    </div>
  );
};

export default Card;
