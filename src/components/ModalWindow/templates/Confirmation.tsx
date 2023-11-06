import React, { FC, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { T_PREFIX } from "..";
import {
  DEFAULT_CONTAINER_BUTTONS_CLASSNAME,
  DEFAULT_MODAL_BUTTON_CLASSNAME,
  MODAL_BUTTON_NAMES,
} from "../constants";

export interface Props {
  className?: string;
  confirmButtonName?: string;
  cancelButtonName?: string;
  confirmButtonVariant?: ButtonVariants;
  cancelButtonVariant?: ButtonVariants;
  isCloseAfterConfirm?: boolean;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export const Confirmation: FC<Props> = ({
  className,
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
    <div className={cn(DEFAULT_CONTAINER_BUTTONS_CLASSNAME, className)}>
      <Button
        className={DEFAULT_MODAL_BUTTON_CLASSNAME}
        variant={confirmButtonVariant}
        onClick={onApprove}
      >
        {trnsExistsConfirmBtn ? trnsConfirmBtn : confirmButtonName}
      </Button>
      <Button
        className={cn("ml-4 !py-2 md:!py-3", DEFAULT_MODAL_BUTTON_CLASSNAME)}
        variant={cancelButtonVariant}
        onClick={onClose}
      >
        {trnsExistsCancelBtn ? trnsCancelBtn : cancelButtonName}
      </Button>
    </div>
  );
};
