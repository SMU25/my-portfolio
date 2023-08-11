import { useEffect, useCallback, RefObject } from "react";
import { ROOT_ELEMENT, MODAL_ROOT_ELEMENT } from "src/constants/rootElements";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: VoidFunction,
  isActive: boolean = true
) => {
  const handleClick: EventListener = useCallback(
    ({ target }) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    if (isActive) {
      ROOT_ELEMENT.addEventListener("click", handleClick);
      MODAL_ROOT_ELEMENT.addEventListener("click", handleClick);

      return () => {
        ROOT_ELEMENT.removeEventListener("click", handleClick);
        MODAL_ROOT_ELEMENT.removeEventListener("click", handleClick);
      };
    }
  }, [isActive, handleClick]);
};
