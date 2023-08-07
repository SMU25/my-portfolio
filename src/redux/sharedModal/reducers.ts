import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IModalState } from "src/types/modal";
import { showSharedModal, hideSharedModal } from "./actions";
import { initialState } from "./slice";

type ActionReducerMapBuilderWithModalState =
  ActionReducerMapBuilder<IModalState>;

export const showSharedModalReducer = (
  builder: ActionReducerMapBuilderWithModalState
) => {
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

export const hideSharedModalReducer = (
  builder: ActionReducerMapBuilderWithModalState
) => {
  builder.addCase(hideSharedModal, (state) => (state = initialState));
};
