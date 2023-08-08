import { useState, useEffect } from "react";
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
  const [isChangedPage, setIsChangedPage] = useState(false);
  const [isChangedLimit, setIsChangedLimit] = useState(false);
  const [isChangedOffset, setIsChangedOffset] = useState(false);

  const isChangedQueryParams =
    isChangedPage || isChangedLimit || isChangedOffset;

  const setQueryParamPage = (page: number) =>
    setQueryParams(`${PAGE_QUERY_PARAM_KEY}=${page}`);

  const setQueryParamLimit = (limit: number) =>
    setQueryParams(`${LIMIT_QUERY_PARAM_KEY}=${limit}`);

  const setQueryParamOffset = (offset: number) =>
    setQueryParams(`${OFFSET_QUERY_PARAM_KEY}=${offset}`);

  const incrementLimit = () => setQueryParamLimit(limit + limitInitialValue);

  useEffect(() => {
    const pageQueryParam = Number(queryParams.get(PAGE_QUERY_PARAM_KEY));
    const limitQueryParam = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
    const offsetQueryParam = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

    if (pageQueryParam) {
      setIsChangedPage(pageQueryParam !== page);
      setPage(pageQueryParam);
    }

    if (limitQueryParam) {
      setIsChangedLimit(limitQueryParam !== limit);
      setLimit(limitQueryParam);
    }

    if (offsetQueryParam) {
      setIsChangedOffset(offsetQueryParam !== offset);
      setOffset(offsetQueryParam);
    }
  }, [queryParams, page, limit, offset]);

  return {
    pageInitialValue,
    limitInitialValue,
    offsetInitialValue,
    page,
    limit,
    offset,
    isChangedPage,
    isChangedLimit,
    isChangedOffset,
    isChangedQueryParams,
    setQueryParamPage,
    setQueryParamLimit,
    setQueryParamOffset,
    incrementLimit,
  };
};
