import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IModalState } from "src/types/modal";
import { showSharedModal, hideSharedModal } from "./actions";

type ActionReducerMapBuilderWithModalState =
  ActionReducerMapBuilder<IModalState>;

export const showSharedModalReducer = (
  builder: ActionReducerMapBuilderWithModalState
) => {
  builder.addCase(
    showSharedModal,
    (state, action: PayloadAction<Omit<IModalState, "isOpen">>) => {
      return { ...state, ...action.payload, isOpen: true };
    }
  );
};

export const hideSharedModalReducer = (
  builder: ActionReducerMapBuilderWithModalState
) => {
  builder.addCase(hideSharedModal, (state) => {
    state.isOpen = false;
  });
};
