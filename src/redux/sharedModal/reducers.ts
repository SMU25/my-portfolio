import { PayloadAction } from "@reduxjs/toolkit";
import { IModalState } from "src/types/modal";
import { showSharedModal, hideSharedModal } from "./actions";
import { initialState } from "./slice";

export const showSharedModalReducer = (builder) => {
  builder.addCase(
    showSharedModal,
    (state, action: PayloadAction<Omit<IModalState, "isOpen">>) => {
      state.isOpen = true;
      state.isShownOverlay = action.payload.isShownOverlay;
      state.isActiveCloseClickOutside =
        action.payload.isActiveCloseClickOutside;
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.children = action.payload.children;
    }
  );
};

export const hideSharedModalReducer = (builder) => {
  builder.addCase(hideSharedModal, (state) => (state = initialState));
};
