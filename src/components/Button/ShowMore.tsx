import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "src/components/Loader";
import { Sizes } from "src/types/sizes";
import { ReactComponent as ArrowRotate } from "src/assets/icons/arrow-rotate.svg";
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
  buttonTitleCountLabel: number;
  onClick?: VoidFunction;
}

export const ShowMore: FC<Props> = ({
  variant = ButtonVariants.SIMPLE_SECONDARY,
  isLoading,
  isDisabled,
  buttonTitle,
  buttonTitleCountLabel,
  onClick,
}) => {
  const { t } = useTranslation();

  const title =
    buttonTitle ||
    t(`${T_PREFIX} - ${DEFAULT_BUTTON_NAME}`, { count: buttonTitleCountLabel });

  return (
    <Button
      className="flex items-center bg-white px-5 sm:px-10 font-medium rounded-10 shadow-card-hard-gray hover:bg-gray-lighter hover:underline hover:underline-offset-4 hover:!brightness-100"
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
