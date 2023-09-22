import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

export type SetQueryParam = (key: string, value: number | string) => void;

interface InitialValues {
  pageInitialValue?: number | string;
  limitInitialValue?: number;
  offsetInitialValue?: number;
}

export const useQueryParams = (initialValues?: InitialValues) => {
  const {
    pageInitialValue = 1,
    limitInitialValue = 6,
    offsetInitialValue,
    // якщо буду міняти і видаляти incrementLimit, то перйеменувати limit на onPageLimit
  } = initialValues || {};

  const [queryParams, setQueryParams] = useSearchParams();

  const pageQueryParam = queryParams.get(PAGE_QUERY_PARAM_KEY);
  const limitQueryParam = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
  const offsetQueryParam = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

  const [page, setPage] = useState<number | string>(
    pageQueryParam || pageInitialValue
  );
  const [limit, setLimit] = useState(limitQueryParam || limitInitialValue);
  const [offset, setOffset] = useState(offsetQueryParam || offsetInitialValue);

  const setQueryParam: SetQueryParam = useCallback(
    (key, value) => {
      queryParams.set(key, String(value));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
  );

  // const incrementLimit = () => setLimit((prev) => prev + limitInitialValue);

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
  };
};
