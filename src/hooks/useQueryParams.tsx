import { useState, useEffect, useCallback } from "react";
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

  const pageQueryParam = Number(queryParams.get(PAGE_QUERY_PARAM_KEY));
  const limitQueryParam = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
  const offsetQueryParam = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

  const [page, setPage] = useState(pageQueryParam || pageInitialValue);
  const [limit, setLimit] = useState(limitQueryParam || limitInitialValue);
  const [offset, setOffset] = useState(offsetQueryParam || offsetInitialValue);

  const setQueryParam: SetQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, String(value));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
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

  useEffect(() => {
    if (page) {
      setQueryParam(PAGE_QUERY_PARAM_KEY, page);
    }
  }, [setQueryParam, page]);

  useEffect(() => {
    if (limit && limit !== limitInitialValue) {
      setQueryParam(LIMIT_QUERY_PARAM_KEY, limit);
    }
  }, [setQueryParam, limit, limitInitialValue]);

  useEffect(() => {
    if (offset && offset !== offsetInitialValue) {
      setQueryParam(OFFSET_QUERY_PARAM_KEY, offset);
    }
  }, [setQueryParam, offset, offsetInitialValue]);

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
