import React, { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { IConfirmation } from "src/types/modal";

const T_PREFIX = "modal-confirmation";

const DEFAULT_CONFIRM_BUTTON_NAME = "yes";
const DEFAULT_CANCEL_BUTTON_NAME = "no";

export const Confirmation: FC<IConfirmation> = ({
  children,
  confirmButtonName,
  cancelButtonName,
  onConfirm,
  onClose,
}) => {
  const { t } = useTranslation();

  const confirm =
    confirmButtonName || t(`${T_PREFIX} - ${DEFAULT_CONFIRM_BUTTON_NAME}`);

  const cancel =
    cancelButtonName || t(`${T_PREFIX} - ${DEFAULT_CANCEL_BUTTON_NAME}`);

  const onApprove = useCallback(() => {
    onConfirm();
    onClose();
  }, [onConfirm, onClose]);

  return (
    <div>
      {children}
      <div>
        <Button variant={ButtonVariants.PRIMARY} onClick={onApprove}>
          {confirm}
        </Button>
        <Button variant={ButtonVariants.BORDERED_GRAY} onClick={onClose}>
          {cancel}
        </Button>
      </div>
    </div>
  );
};
