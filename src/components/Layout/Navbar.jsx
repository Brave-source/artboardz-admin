import React from "react";
import CollectorsIcons from "../../Assets/Icons/Collectors";
import CollectionsIcons from "../../Assets/Icons/Collections";
import Link from "next/link";

export const Navbar = () => {
  const activeClassHandler = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-[10px] pl-[30px] border-l-4 border-white bg-[#4B5768]"
      : "flex items-center gap-[10px] pl-[30px]";
  };
  return (
    <nav className="bg-[#14171F] border-t border-white pt-10 text-white">
      <ul className="grid gap-5 font-semibold text-lg tracking-wide">
        <li>
          <Link className={activeClassHandler} href="/collectors">
            <span
              aria-hidden
              className="flex justify-around h-[2rem] w-[200px]"
            >
              <CollectorsIcons />
              <p>
                Collectors
              </p>
            </span>
          </Link>
        </li>
        <li>
          <Link className={activeClassHandler} href="/collections">
            <span
              aria-hidden
              className="flex justify-around h-[2rem] w-[200px]"
            >
              <CollectionsIcons />
              <p>
                Collections
              </p>
            </span>
            
          </Link>
        </li>
      </ul>
    </nav>
  );
};
