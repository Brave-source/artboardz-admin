import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UI-slice";
import { createWrapper } from "next-redux-wrapper";
import collectionReducer from './CollectionSlice';

const makeStore = () => 
  configureStore({
    reducer: { UI: UIReducer, collection: collectionReducer },
  }) 

export const store = createWrapper(makeStore);