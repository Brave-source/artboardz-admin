import React from "react";
import TrafficIcon from "../../Assets/Icons/Traffic";

const CollectionListHeader = () => {
  return (
    <div className="bg-[#14171F] p-5 text-center text-sm font-semibold">
      <div className="grid grid-cols-6 place-items-center text-white">
        <div className="flex gap-2 items-center">
          <p>Policy</p>
          <TrafficIcon />
        </div>
        <div className="flex gap-2 items-center">
          <p>Artist Name</p> <TrafficIcon />
        </div>
        <div className="flex gap-2 items-center">
          <p>Artboard Title</p> <TrafficIcon />
        </div>
        <div className="flex gap-2 items-center">
          <p>Location</p> <TrafficIcon />
        </div>
        <div className="flex gap-2 items-center">
          <p>Supply</p> <TrafficIcon />
        </div>
        <div>
          <p>Action</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionListHeader;
