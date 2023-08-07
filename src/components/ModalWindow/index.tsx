import React, { FC, useRef } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { useClickOutside } from "src/hooks/useClickOutside";
import { Button } from "src/components/Button";
import { IModalState } from "src/types/modal";
import { ReactComponent as Close } from "src/assets/icons/circle-xmark.svg";
import { ButtonVariants } from "../Button/types";

const ICON_CLOSE_SIZE = 30;

interface Props extends IModalState {
  onCloseModal: VoidFunction;
}

export const ModalWindow: FC<Props> = ({
  children,
  className,
  isOpen,
  cookiesKeyModal,
  isShownOverlay,
  isActiveCloseClickOutside,
  title,
  text,
  onCloseModal,
}) => {
  const modalRef = useRef();

  const cookiesIsShownModal = Cookies.get(cookiesKeyModal);
  const isOpenModal = cookiesIsShownModal !== "false" && isOpen;

  const onClose = () => {
    onCloseModal();

    if (cookiesKeyModal) {
      Cookies.set(cookiesKeyModal, "false");
    }
  };

  useClickOutside(modalRef, onClose, isActiveCloseClickOutside);

  return (
    <div
      className={cn("invisible absolute top-0 left-0 w-full opacity-50 z-40", {
        "!visible !opacity-100": isOpenModal,
        "!fixed h-full bg-gray-lighter-opacity": isShownOverlay,
      })}
    >
      <div
        ref={modalRef}
        className={cn(
          "invisible fixed top-1/4 translate-y-height-screen left-1/2 -translate-x-1/2 bg-white p-7 opacity-50 rounded-10 shadow-card-hard-gray z-40 transition-all duration-500",
          className,
          {
            "!visible !translate-y-0 !opacity-100": isOpenModal,
          }
        )}
      >
        <Button
          className="absolute top-1 right-2"
          variant={ButtonVariants.SIMPLE_SECONDARY}
          onClick={onClose}
        >
          <Close width={ICON_CLOSE_SIZE} height={ICON_CLOSE_SIZE} />
        </Button>
        {title && <h3 className="truncate">{title}</h3>}
        {text && <p>{text}</p>}
        {children}
      </div>
    </div>
  );
};
