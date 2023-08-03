import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSharedModal } from "src/redux/sharedModal/actions";
import { selectSharedModalState } from "src/redux/sharedModal/selectors";
import { ModalWindow } from ".";

export const SharedModalWindow: FC = () => {
  const dispatch = useDispatch();

  const { isOpen, ...sharedModal } = useSelector(selectSharedModalState);

  const onClose = () => {
    if (isOpen) dispatch(hideSharedModal());
  };

  return <ModalWindow isOpen={isOpen} onClose={onClose} {...sharedModal} />;
};
