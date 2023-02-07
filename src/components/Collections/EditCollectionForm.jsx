import React from "react";
import Form from "../UI/Form";
import EditForm from './EditForm'

const EditCollectionForm = ({id, Policy, suplyTime, artboardTitle, artistName, location, setIsOpen}) => {
  return (
    <Form Title={"Edit collection"} setIsOpen={setIsOpen}>
      <EditForm setIsOpen={setIsOpen} id={id} Policy={Policy} suplyTime={suplyTime} artboardTitle={artboardTitle} artName={artistName} location={location} />
    </Form>
  );
};

export default EditCollectionForm;
