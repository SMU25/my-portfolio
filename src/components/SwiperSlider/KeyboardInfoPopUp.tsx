import React, { FC, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { ReactComponent as KeyboardArrows } from "src/assets/keyboard-arrows.svg";
import { ModalWindow } from "../ModalWindow";

const T_PREFIX = "swiper-keyboard-control-info";

const INFO_TEXT = "text";

interface Props {
  className?: string;
  isShown?: boolean;
  cookiesKeyPopUp?: string;
}

export const KeyboardInfoPopUp: FC<Props> = ({
  className,
  isShown,
  cookiesKeyPopUp,
}) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(isShown);

  const onClose = () => {
    if (isOpen) setIsOpen(false);
  };

  if (!isShown) return null;

  return (
    <ModalWindow
      className={cn("!absolute hidden sm:block", className)}
      isOpen={isOpen}
      onCloseModal={onClose}
      cookiesKeyModal={cookiesKeyPopUp}
      isActiveCloseClickOutside={false}
    >
      <div className="flex justify-center items-center w-112.5 px-6">
        <KeyboardArrows className="min-w-11 w-11 h-11" />
        <div className="min-w-5 w-5 h-0.5 bg-blue-light mx-4" />
        <p className="text-blue-dark text-lg leading-6 font-bold">
          {t(`${T_PREFIX} - ${INFO_TEXT}`)}
        </p>
      </div>
    </ModalWindow>
  );
};
