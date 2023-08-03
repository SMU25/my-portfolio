import { createAction } from "@reduxjs/toolkit";
import { IModalState } from "src/types/modal";

export const SHARED_MODAL_SLICE_NAME = "sharedModalWindow";

export const showSharedModal = createAction<Omit<IModalState, "isOpen">>(
  `${SHARED_MODAL_SLICE_NAME}/showSharedModal`
);

export const hideSharedModal = createAction(
  `${SHARED_MODAL_SLICE_NAME}/hideSharedModal`
);
