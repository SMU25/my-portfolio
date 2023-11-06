import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

export type SetQueryParam = (key: string, value: number | string) => void;

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

  const location = useLocation();

  const [queryParams, setQueryParams] = useSearchParams();

  const page =
    Number(queryParams.get(PAGE_QUERY_PARAM_KEY)) || pageInitialValue;
  const limit =
    Number(queryParams.get(LIMIT_QUERY_PARAM_KEY)) || limitInitialValue;
  const offset =
    Number(queryParams.get(OFFSET_QUERY_PARAM_KEY)) || offsetInitialValue;

  const setQueryParam: SetQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, String(value));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
  );

  const setPage = useCallback(
    (page: number) => setQueryParam(PAGE_QUERY_PARAM_KEY, page),
    [setQueryParam]
  );
  const setLimit = useCallback(
    (limit: number) => setQueryParam(LIMIT_QUERY_PARAM_KEY, limit),
    [setQueryParam]
  );
  const setOffset = useCallback(
    (offset: number) => setQueryParam(OFFSET_QUERY_PARAM_KEY, offset),
    [setQueryParam]
  );

  const createQueryString = useCallback(
    (key: string, value: number | string): string =>
      location.search.includes(key) ? `&${key}=${value}` : "",
    [location]
  );

  const generatePagePathName = useCallback(
    (pageNumber: number) => {
      const pageQueryString = `?${PAGE_QUERY_PARAM_KEY}=${pageNumber}`;
      const limitQueryString = createQueryString(LIMIT_QUERY_PARAM_KEY, limit);
      const offsetQueryString = createQueryString(
        OFFSET_QUERY_PARAM_KEY,
        offset
      );

      return `${location.pathname}${pageQueryString}${limitQueryString}${offsetQueryString}`;
    },
    [createQueryString, location, limit, offset]
  );

  return {
    pageInitialValue,
    limitInitialValue,
    offsetInitialValue,
    page,
    limit,
    offset,
    setPage,
    setLimit,
    setOffset,
    generatePagePathName,
  };
};
