import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

interface InitialValues {
  pageInitialValue?: number;
  limitInitialValue?: number;
  offsetInitialValue?: number;
}

export const useQueryParams = (initialValues?: InitialValues) => {
  const {
    pageInitialValue = 1,
    limitInitialValue = 6,
    offsetInitialValue,
  } = initialValues || {};

  const [queryParams, setQueryParams] = useSearchParams();

  const [page, setPage] = useState(pageInitialValue);
  const [limit, setLimit] = useState(limitInitialValue);
  const [offset, setOffset] = useState(offsetInitialValue);


  const isChangedLimit = limitInitialValue !== limit;

  const setQueryParamPage = (page: number) =>
    setQueryParams(`${PAGE_QUERY_PARAM_KEY}=${page}`);

  const setQueryParamLimit = (limit: number) =>
    setQueryParams(`${LIMIT_QUERY_PARAM_KEY}=${limit}`);

  const setQueryParamOffset = (offset: number) =>
    setQueryParams(`${OFFSET_QUERY_PARAM_KEY}=${offset}`);

  const incrementLimit = () => setQueryParamLimit(limit + limitInitialValue);

  useEffect(() => {
    const page = Number(queryParams.get(PAGE_QUERY_PARAM_KEY));
    const limit = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
    const offset = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

    if (page) setPage(page);

    if (limit) setLimit(limit);

    if (offset) setOffset(offset);
  }, [queryParams]);

  return {
    pageInitialValue,
    limitInitialValue,
    offsetInitialValue,
    page,
    limit,
    offset,
    isChangedLimit,
    setQueryParamPage,
    setQueryParamLimit,
    setQueryParamOffset,
    incrementLimit,
  };
};
