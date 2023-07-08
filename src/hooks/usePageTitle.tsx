import React, { useEffect } from "react";
import { DEFAULT_PAGE_TITLE } from "src/pages/constants";

export const usePageTitle = (title?: string) =>
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${DEFAULT_PAGE_TITLE}`
      : DEFAULT_PAGE_TITLE;

    document.title = pageTitle;
  }, [title]);
