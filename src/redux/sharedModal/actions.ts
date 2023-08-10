import { createAction } from "@reduxjs/toolkit";
import { IModalState } from "src/types/modal";

export const SHARED_MODAL_SLICE_NAME = "sharedModalWindow";

export const showSharedModal = createAction(
  `${SHARED_MODAL_SLICE_NAME}/showSharedModal`,
  (payload: Omit<IModalState, "isOpen" | "children">) => ({ payload })
);

export const hideSharedModal = createAction(
  `${SHARED_MODAL_SLICE_NAME}/hideSharedModal`
);
