import React, { useEffect, useCallback, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<any>,
  callback: VoidFunction,
  isActive: boolean = true
) => {
  const handleClick: EventListener = useCallback(
    ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    if (isActive) {
      document.getElementById("root").addEventListener("click", handleClick);
      return () => {
        document
          .getElementById("root")
          .removeEventListener("click", handleClick);
      };
    }
  }, [isActive, handleClick]);
};
