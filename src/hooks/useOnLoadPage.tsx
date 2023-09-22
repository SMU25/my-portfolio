import { useState } from "react";

export const useOnLoadPage = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  return { isLoadingPage, setIsLoadingPage };
};
