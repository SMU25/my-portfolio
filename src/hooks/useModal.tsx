import { useState, useCallback } from "react";
import Cookies from "js-cookie";

export const useModal = (isOpen: boolean = false, cookiesKeyModal?: string) => {
  const cookiesIsShownModal = Cookies.get(cookiesKeyModal);

  const [isOpenModal, setIsOpenModal] = useState(
    cookiesIsShownModal !== "false" && isOpen
  );

  const closeModal = useCallback(() => {
    setIsOpenModal(false);

    if (cookiesKeyModal) {
      Cookies.set(cookiesKeyModal, "false");
    }
  }, [cookiesKeyModal]);

  const openModal = () => setIsOpenModal(true);

  return { isOpenModal, openModal, closeModal };
};
