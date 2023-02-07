import React from "react";
import { useDispatch } from "react-redux";
import CancelIcon from "../../Assets/Icons/CancelIcon";
import { UIActions } from "../../store/redux-store/UI-slice";

const Form = ({ Title, children }) => {
  const dispatch = useDispatch();
  const hideFormHandler = (evt) => {
    evt.preventDefault();
    dispatch(UIActions.hideAddCollectionForm());
    dispatch(UIActions.hideEditCollectionForm());
  };
  return (
    <div className="w-11/12 max-w-[680px] bg-[#1A1D27] max-h-form pb-5 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  mx-auto text-white rounded-[10px] overflow-y-auto grid gap-y-5 font-[Inter]">
      <header className="text-white flex items-center justify-between sticky top-0 bg-[#1A1D27] py-5">
        <p className=" text-xl capitalize ">{Title}</p>
        <button onClick={hideFormHandler}>
          <CancelIcon />
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Form;
