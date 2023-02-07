import React from "react";

export const Avatar = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover rounded-full"
    />
  );
};
