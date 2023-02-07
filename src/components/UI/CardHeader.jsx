import React from "react";
import FilterIcon from "../../Assets/Icons/Filter";
import SearchIcon from "../../Assets/Icons/Search";

const CardHeader = ({ type }) => {
  return (
    <div className="w-full bg-white flex items-center justify-between p-5 relative">
      <h1 className="text-[#14171F] text-sm font-medium tracking-wide px-[18px] py-[6px] border-b-2 border-[#14171F] absolute bottom-0">
        {type}
      </h1>
      <div className="flex items-center justify-between gap-3 ml-auto">
        <form className="flex justify-between items-center border-b border-[#D1E3FF] ">
          <input type="text" className="bg-transparent outline-none" />
          <SearchIcon />
        </form>
        <button>
          <FilterIcon />
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
