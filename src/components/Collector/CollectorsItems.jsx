import React, { useState } from "react";
import CancelIcon from "../../Assets/Icons/CancelIcon";
import OptionsIcon from "../../Assets/Icons/Options";
import { Avatar } from "../UI/Avatar";

const CollectorsItems = ({
  image,
  walletAddress,
  artboardTag,
  nationality,
  twitter,
  uniqueCollection,
  collectionSize,
  display,
}) => {
  const [actionsPanelIsShown, setActionsPanelIsShown] = useState(false);
  const toggleActionHandler = (second) => {
    setActionsPanelIsShown((oldState) => !oldState);
  };
  const displayColor = display ? "bg-[#059669]" : "bg-[#DC2626]";
  return (
    <li className="grid grid-cols-9 py-5 place-items-center text-sm font-semibold tracking-wide break-word border-b border-[#AECEFF] last-of-type:border-none text-[#323A46] relative">
      <div className="w-[48px] aspect-square rounded-full">
        <Avatar image={image} />
      </div>
      <div>
        <p className="break-all">{walletAddress}</p>
      </div>
      <div>
        <p>{artboardTag}</p>
      </div>
      <div>
        <p>{nationality}</p>
      </div>
      <div>
        <p>{twitter}</p>
      </div>
      <div>
        <p>{uniqueCollection}</p>
      </div>
      <div>
        <p>{collectionSize}</p>
      </div>
      <div className="w-full">
        <p
          className={`${displayColor} py-[5px] w-full text-center rounded-md text-white`}
        >
          {display ? "Displayed" : "Not Displayed"}
        </p>
      </div>
      <button>
        <OptionsIcon />
      </button>
      {actionsPanelIsShown && (
        <div className="absolute top-0 right-0 rounded border border-black p-5 bg-white space-y-3">
          <p className="flex gap-2 items-center">
            Display User
            <input type="checkbox" className="toggle toggle-xs" />
          </p>
          <p>Delete User</p>
        </div>
      )}
    </li>
  );
};

export default CollectorsItems;
