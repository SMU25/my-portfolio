import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { T_PREFIX } from "..";
import { MODAL_BUTTON_NAMES } from "../constants";

export interface Props {
  children?: ReactNode;
  approvalButtonName?: string;
  onClose: VoidFunction;
}

export const Alert: FC<Props> = ({
  children,
  approvalButtonName = MODAL_BUTTON_NAMES.OK,
  onClose,
}) => {
  const { t } = useTranslation();

  const approvalBtnTrnsKey = `${T_PREFIX} - ${approvalButtonName}`;
  const trnsApprovalBtn = t(approvalBtnTrnsKey);
  const trnsExistsApprovalBtn = trnsApprovalBtn !== approvalBtnTrnsKey;

  return (
    <div>
      {children}
      <Button variant={ButtonVariants.PRIMARY} onClick={onClose}>
        {trnsExistsApprovalBtn ? trnsApprovalBtn : approvalButtonName}
      </Button>
    </div>
  );
};
