import React, { FC, ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { T_PREFIX } from "..";
import { MODAL_BUTTON_NAMES } from "../constants";

export interface Props {
  children?: ReactNode;
  confirmButtonName?: string;
  cancelButtonName?: string;
  confirmButtonVariant?: ButtonVariants;
  cancelButtonVariant?: ButtonVariants;
  isCloseAfterConfirm?: boolean;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export const Confirmation: FC<Props> = ({
  children,
  confirmButtonName = MODAL_BUTTON_NAMES.YES,
  cancelButtonName = MODAL_BUTTON_NAMES.NO,
  confirmButtonVariant = ButtonVariants.PRIMARY,
  cancelButtonVariant = ButtonVariants.BORDERED_GRAY,
  isCloseAfterConfirm = true,
  onConfirm,
  onClose,
}) => {
  const { t } = useTranslation();

  const confirmBtnTrnsKey = `${T_PREFIX} - ${confirmButtonName}`;
  const cancelBtnTrnsKey = `${T_PREFIX} - ${cancelButtonName}`;

  const trnsConfirmBtn = t(confirmBtnTrnsKey);
  const trnsCancelBtn = t(cancelBtnTrnsKey);

  const trnsExistsConfirmBtn = trnsConfirmBtn !== confirmBtnTrnsKey;
  const trnsExistsCancelBtn = trnsCancelBtn !== cancelBtnTrnsKey;

  const onApprove = useCallback(() => {
    onConfirm();

    if (isCloseAfterConfirm) {
      onClose();
    }
  }, [onConfirm, onClose, isCloseAfterConfirm]);

  return (
    <div>
      {children}
      <div className="flex items-center">
        <Button variant={confirmButtonVariant} onClick={onApprove}>
          {trnsExistsConfirmBtn ? trnsConfirmBtn : confirmButtonName}
        </Button>
        <Button
          className="ml-3"
          variant={cancelButtonVariant}
          onClick={onClose}
        >
          {trnsExistsCancelBtn ? trnsCancelBtn : cancelButtonName}
        </Button>
      </div>
    </div>
  );
};
