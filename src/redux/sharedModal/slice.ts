import { createSlice } from "@reduxjs/toolkit";
import { SHARED_MODAL_SLICE_NAME } from "./actions";
import { showSharedModalReducer, hideSharedModalReducer } from "./reducers";
import { IModalState } from "src/types/modal";

const initialState: IModalState = {
  isOpen: false,
  isShownOverlay: true,
  isActiveCloseClickOutside: true,
  title: "",
  text: "",
};

export const { reducer: sharedModal } = createSlice({
  name: SHARED_MODAL_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    showSharedModalReducer(builder);
    hideSharedModalReducer(builder);
  },
});
