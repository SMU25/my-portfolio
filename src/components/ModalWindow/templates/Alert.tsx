import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { IAlert } from "src/types/modal";

const T_PREFIX = "modal-alert";

const DEFAULT_APPROVAL_BUTTON_NAME = "ok";

export const Alert: FC<IAlert> = ({
  children,
  approvalButtonName,
  onClose,
}) => {
  const { t } = useTranslation();

  const approval =
    approvalButtonName || t(`${T_PREFIX} - ${DEFAULT_APPROVAL_BUTTON_NAME}`);

  return (
    <div>
      {children}
      <Button variant={ButtonVariants.PRIMARY} onClick={onClose}>
        {approval}
      </Button>
    </div>
  );
};
