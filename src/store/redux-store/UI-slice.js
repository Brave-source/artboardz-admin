import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  AddCollectionFormIsShown: false,
  EditCollectionFormIsShown: false,
};

const UIslice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    showAddCollectionForm(state) {
      state.AddCollectionFormIsShown = true;
    },
    hideAddCollectionForm(state) {
      state.AddCollectionFormIsShown = false;
    },
    showEditCollectionForm(state) {
      state.EditCollectionFormIsShown = true;
    },
    hideEditCollectionForm(state) {
      state.EditCollectionFormIsShown = false;
    },
  },
});

const UIReducer = UIslice.reducer;
export const UIActions = UIslice.actions;
export const AddCollectionFormIsShown = (state) =>
  state.UI.AddCollectionFormIsShown;
export const EditCollectionFormIsShown = (state) =>
  state.UI.EditCollectionFormIsShown;

export default UIReducer;
