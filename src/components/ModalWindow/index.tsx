import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { useClickOutside } from "src/hooks/useClickOutside";
import { Button } from "src/components/Button";
import { ReactComponent as Close } from "src/assets/icons/circle-xmark.svg";
import { MODAL_ROOT_ELEMENT } from "src/constants/rootElements";
import { ButtonVariants } from "../Button/types";

const ICON_CLOSE_SIZE = 30;

export const T_PREFIX = "modal";
interface Props {
  children?: ReactNode;
  isOpen?: boolean;
  isActivePortal?: boolean;
  isShownOverlay?: boolean;
  isActiveCloseClickOutside?: boolean;
  className?: string;
  title?: string;
  text?: string;
  onClose: VoidFunction;
}

export const ModalWindow: FC<Props> = ({
  children,
  className,
  isOpen,
  isActivePortal,
  isShownOverlay = true,
  isActiveCloseClickOutside = true,
  title,
  text,
  onClose,
}) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, onClose, isActiveCloseClickOutside);

  const component = (
    <div
      className={cn("invisible absolute top-0 left-0 w-full opacity-50 z-10", {
        "!visible !opacity-100": isOpen,
        "!fixed h-full bg-gray-lighter-opacity": isShownOverlay,
        "!z-50": isActivePortal,
      })}
    >
      <div
        ref={modalRef}
        className={cn(
          "invisible fixed top-1/4 translate-y-height-screen left-1/2 -translate-x-1/2 bg-white p-7 opacity-50 rounded-10 shadow-card-hard-gray transition-all duration-500 z-10",
          className,
          {
            "!visible !translate-y-0 !opacity-100": isOpen,
            "!z-50": isActivePortal,
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

  return isActivePortal
    ? createPortal(component, MODAL_ROOT_ELEMENT)
    : component;
};
