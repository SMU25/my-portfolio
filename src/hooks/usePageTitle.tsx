import React, { useEffect } from "react";
import { DEFAULT_PAGE_TITLE } from "src/pages/constants";

export const usePageTitle = (title?: string) =>
  useEffect(() => {
    document.title = title || DEFAULT_PAGE_TITLE;
  }, [title]);
