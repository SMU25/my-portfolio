import React, { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { useClickOutside } from "src/hooks/useClickOutside";
import { ReactComponent as Close } from "src/assets/icons/circle-xmark.svg";
import { MODAL_ROOT_ELEMENT } from "src/constants/rootElements";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";
import { Button } from "../Button";
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

  const isActiveClickOutside = isOpen && isActiveCloseClickOutside;
  useClickOutside(modalRef, onClose, isActiveClickOutside);

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
          "invisible fixed top-1/4 translate-y-height-screen left-1/2 -translate-x-1/2 scale-0 min-w-9/10 xs:min-w-4/5 md:min-w-2/3 gl:min-w-1/2 bg-white pt-2.5 pb-5 xs:pb-7 sm:pb-8 px-3 opacity-50 rounded-10 shadow-card-hard-gray transition-all duration-500 z-10",
          className,
          {
            "!visible !translate-y-0 !scale-100 !opacity-100": isOpen,
            "!z-50": isActivePortal,
          }
        )}
      >
        <div className="w-full flex justify-end">
          <Button
            className="default:p-0"
            variant={ButtonVariants.SIMPLE_SECONDARY}
            onClick={onClose}
          >
            <Close width={ICON_CLOSE_SIZE} height={ICON_CLOSE_SIZE} />
          </Button>
        </div>
        <div className="mt-1 xs:mt-2 lg:mt-1 px-5 lg:px-10 text-center">
          {title && (
            <Heading
              className="text-lg xs:text-xl sm:text-2xl md:text-28 leading-6 xs:leading-7 sm:leading-8 md:leading-8.5"
              tagHeading={TagsHeading.H4}
            >
              {title}
            </Heading>
          )}
          {text && (
            <p className="mt-1 xs:mt-1.5 md:mt-2 sm:text-lg md:text-xl leading-6.5">
              {text}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );

  return isActivePortal
    ? createPortal(component, MODAL_ROOT_ELEMENT)
    : component;
};
