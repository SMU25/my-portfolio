import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useModal } from "src/hooks/useModal";
import { ReactComponent as KeyboardArrows } from "src/assets/icons/keyboard-arrows.svg";
import { ModalWindow } from "../ModalWindow";
import { Alert } from "../ModalWindow/templates/Alert";
import { ButtonVariants } from "../Button/types";

const T_PREFIX = "swiper-keyboard-control-info";

const INFO_TEXT = "text";

interface Props {
  className?: string;
  isShown?: boolean;
  cookiesKeyPopup?: string;
}

export const KeyboardInfoPopup: FC<Props> = ({
  className,
  isShown,
  cookiesKeyPopup,
}) => {
  const { t } = useTranslation();

  const { isOpenModal, closeModal } = useModal(isShown, cookiesKeyPopup);

  if (!isShown) return null;

  return (
    <ModalWindow
      className={cn("!absolute hidden sm:block !pb-5", className)}
      isOpen={isOpenModal}
      onClose={closeModal}
      isShownOverlay={false}
      isActiveCloseClickOutside={false}
    >
      <div className="flex justify-center items-center w-full px-6">
        <KeyboardArrows className="min-w-11 w-11 h-11" />
        <div className="min-w-5 w-5 h-0.5 bg-blue-light mx-4" />
        <p className="text-start text-blue-dark text-lg leading-6 font-bold">
          {t(`${T_PREFIX} - ${INFO_TEXT}`)}
        </p>
      </div>
      <Alert
        className="default:mt-4"
        approvalButtonClassName="default:py-1 md:py-2.5"
        approvalButtonVariant={ButtonVariants.SECONDARY}
        onClose={closeModal}
      />
    </ModalWindow>
  );
};
