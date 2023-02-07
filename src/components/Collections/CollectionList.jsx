import axios from "axios";
import {useEffect, useState} from "react";
import CollectionItem from "./CollectionsIItem";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionFailure, getCollectionStart, getCollectionSuccess } from "../../store/redux-store/CollectionSlice";

const DUMMY_DATA = [
  {
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "First Project",
    location: "CapeTown",
    supplyTime: "50",
  },
  {
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "Second Project",
    location: "CapeTown",
    supplyTime: "50",
  },
{
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "Third Project",
    location: "CapeTown",
    supplyTime: "50",
  },  
];
const CollectionList = () => {
const dispatch = useDispatch()
const collections = useSelector((state) => state.collection.collections)

useEffect(() => {
  const getCollections = async() => {
    dispatch(getCollectionStart())
    try {
      const res = await axios.get('http://localhost:3000/api/collections')
      dispatch(getCollectionSuccess((res.data)));
    }catch(err){
      dispatch(getCollectionFailure())
    }
  }
  getCollections()
},[])
return (
    <ul className="px-5">
      {/* {DUMMY_DATA.map((data, index) => {
        return (
          <CollectionItem
            key={index}
            Policy={data.Policy}
            artistName={data.artistName}
            artboardTitle={data.artboardTitle}
            location={data.location}
            supplyTime={data.supplyTime}
          />
        );
      })} */}
      {collections.map((data, index) => {
        return (
          <CollectionItem
            key={data?._id}
            id={data?._id}
            Policy={data?.policy}
            artistName={data?.name}
            artboardTitle={data?.title}
            supplyTime={data?.supply}
            location={data?.location}
          />
        );
      })}
    </ul>
  );
};

// export const getCollections = async() => {
//   const collectionRes = await axios.get('http://localhost:3000/api/collections')
//   return {
//     props: {
//       collections: collectionRes.data
//     }
//   }
// }
export default CollectionList;
