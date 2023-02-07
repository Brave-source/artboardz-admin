import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCollectionFormIsShown,
  EditCollectionFormIsShown,
  UIActions,
} from "../../store/redux-store/UI-slice";
import Card from "../UI/Card";
import CardHeader from "../UI/CardHeader";
import AddCollectionForm from "./AddCollectionForm";
import CollectionList from "./CollectionList";
import CollectionListHeader from "./CollectionListHeader";
import EditCollectionForm from "./EditCollectionForm";

const CollectionBoard = () => {
  const showAddToCollection = useSelector(AddCollectionFormIsShown);
  const showEditCollection = useSelector(EditCollectionFormIsShown);
  const dispatch = useDispatch();
  const showFormHandler = () => {
    dispatch(UIActions.showAddCollectionForm());
  };
  return (
    <Card>
      <div className="grid grid-cols-collectionHeader items-center">
        <CardHeader type="Collections" />
        <div className="px-5 bg-white h-full grid items-center">
          <button
            onClick={showFormHandler}
            className="text-white text-xs tracking-wide font-medium bg-[#14171F] py-[6px] px-[10px] rounded-md"
          >
            Add Collections
          </button>
        </div>
      </div>
      <CollectionListHeader />
      <CollectionList />
      {showAddToCollection && <AddCollectionForm />}
      {showEditCollection && <EditCollectionForm />}
    </Card>
  );
};

export default CollectionBoard;
