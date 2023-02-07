import React, { useState } from "react";
import Form from "../UI/Form";
import GeneralDescForm from "./GeneralDescForm";
import MetadataForm from "./MetadataForm";

function FormTab(props) {
  return (
    <div className="flex  justify-center gap-10  col-span-2 sticky top-[70px] bg-[#1A1D27] text-xl">
      <button
        className={`${
          props.currentTab === "General Description"
            ? "border-b border-white"
            : "text-[#B3B5BD]"
        }`}
        onClick={(evt) => {
          evt.preventDefault();
          props.setCurrentTab("General Description");
        }}
      >
        General Description
      </button>
      <button
        className={`${
          props.currentTab === "Metadata"
            ? "border-b border-white"
            : "text-[#B3B5BD]"
        }`}
        onClick={(evt) => {
          evt.preventDefault();
          props.setCurrentTab("Metadata");
        }}
      >
        Metadata
      </button>
    </div>
  );
}

const AddCollectionForm = () => {
  const [currentTab, setCurrentTab] = useState("General Description");

  return (
    <Form Title="New Collection">
      <FormTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "General Description" && <GeneralDescForm />}
      {currentTab === "Metadata" && <MetadataForm />}
    </Form>
  );
};

export default AddCollectionForm;
