import React, { FC } from "react";
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
  approvalButtonClassName?: string;
  approvalButtonName?: string;
  approvalButtonVariant?: ButtonVariants;
  onClose: VoidFunction;
}

export const Alert: FC<Props> = ({
  className,
  approvalButtonClassName,
  approvalButtonName = MODAL_BUTTON_NAMES.OK,
  approvalButtonVariant = ButtonVariants.PRIMARY,
  onClose,
}) => {
  const { t } = useTranslation();

  const approvalBtnTrnsKey = `${T_PREFIX} - ${approvalButtonName}`;
  const trnsApprovalBtn = t(approvalBtnTrnsKey);
  const trnsExistsApprovalBtn = trnsApprovalBtn !== approvalBtnTrnsKey;

  return (
    <div
      className={cn("flex-col", DEFAULT_CONTAINER_BUTTONS_CLASSNAME, className)}
    >
      <Button
        className={cn(DEFAULT_MODAL_BUTTON_CLASSNAME, approvalButtonClassName)}
        variant={approvalButtonVariant}
        onClick={onClose}
      >
        {trnsExistsApprovalBtn ? trnsApprovalBtn : approvalButtonName}
      </Button>
    </div>
  );
};
