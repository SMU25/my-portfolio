import React, { useEffect } from "react";

const DEFAULT_PAGE_TITLE = "My Portfolio";

export const usePageTitle = (title?: string) =>
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${DEFAULT_PAGE_TITLE}`
      : DEFAULT_PAGE_TITLE;

    document.title = pageTitle;
  }, [title]);
