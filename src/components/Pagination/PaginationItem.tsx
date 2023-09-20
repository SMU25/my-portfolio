import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";

interface Props {
  children: ReactNode;
  variant?: ButtonVariants;
  isDisabled?: boolean;
}

export const PaginationItem: FC<Props> = ({
  children,
  variant = ButtonVariants.BORDERED_SECONDARY,
  isDisabled,
}) => {
  return (
    <Button
      className={cn(
        "default:py-2.5 default:px-4.5 default:disabled:py-3 default:disabled:px-5"
      )}
      variant={variant}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};
