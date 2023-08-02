import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "src/components/Loader";
import { Sizes } from "src/types/sizes";
import { ReactComponent as ArrowRotate } from "src/assets/arrow-rotate.svg";
import { Button } from ".";
import { ButtonVariants } from "./types";
import { T_PREFIX } from "./constants";

const ARROW_ROTATE_ICON_SIZE = 24;

const DEFAULT_BUTTON_NAME = "show-more";

interface Props {
  variant?: ButtonVariants;
  isLoading?: boolean;
  isDisabled?: boolean;
  buttonTitle?: string;
  showMoreItemsCount: number;
  onClick?: VoidFunction;
}

export const ShowMore: FC<Props> = ({
  variant = ButtonVariants.SIMPLE_SECONDARY,
  isLoading,
  isDisabled,
  buttonTitle,
  showMoreItemsCount,
  onClick,
}) => {
  const { t } = useTranslation();

  const title =
    buttonTitle ||
    t(`${T_PREFIX} - ${DEFAULT_BUTTON_NAME}`, { count: showMoreItemsCount });

  return (
    <Button
      className="flex items-center px-10 hover:underline hover:brightness-100"
      variant={variant}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader size={Sizes.S} />
      ) : (
        <ArrowRotate
          className="rotate-12"
          width={ARROW_ROTATE_ICON_SIZE}
          height={ARROW_ROTATE_ICON_SIZE}
        />
      )}
      <span className="ml-4 hover:text-blue-dark">{title}</span>
    </Button>
  );
};
