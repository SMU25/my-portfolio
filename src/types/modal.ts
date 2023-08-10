import { ReactNode } from "react";

export interface IAlert {
  children?: ReactNode;
  approvalButtonName?: string;
  onClose: VoidFunction;
}

export interface IConfirmation {
  children?: ReactNode;
  confirmButtonName?: string;
  cancelButtonName?: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}
export interface IModalState {
  children?: ReactNode;
  isOpen?: boolean;
  isShownOverlay?: boolean;
  isActiveCloseClickOutside?: boolean;
  cookiesKeyModal?: string;
  className?: string;
  title?: string;
  text?: string;
  alert?: Omit<IAlert, "children" | "onClose">;
  confirmation?: Omit<IConfirmation, "children" | "onClose">;
}
