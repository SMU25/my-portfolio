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
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export const Confirmation: FC<Props> = ({
  children,
  confirmButtonName = MODAL_BUTTON_NAMES.YES,
  cancelButtonName = MODAL_BUTTON_NAMES.NO,
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
    onClose();
  }, [onConfirm, onClose]);

  return (
    <div>
      {children}
      <div className="flex items-center">
        <Button variant={ButtonVariants.PRIMARY} onClick={onApprove}>
          {trnsExistsConfirmBtn ? trnsConfirmBtn : confirmButtonName}
        </Button>
        <Button
          className="ml-3"
          variant={ButtonVariants.BORDERED_GRAY}
          onClick={onClose}
        >
          {trnsExistsCancelBtn ? trnsCancelBtn : cancelButtonName}
        </Button>
      </div>
    </div>
  );
};
