// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const PAGE_QUERY_PARAM_KEY = "page";
// const LIMIT_QUERY_PARAM_KEY = "limit";
// const OFFSET_QUERY_PARAM_KEY = "offset";

// export type SetQueryParam = (value: number | string) => void;

// interface InitialValues {
//   pageInitialValue?: number | string;
//   limitInitialValue?: number;
//   offsetInitialValue?: number;
// }

// export const useQueryParams = (initialValues?: InitialValues) => {
//   const {
//     pageInitialValue = 1,
//     limitInitialValue = 6,
//     offsetInitialValue,
//     // якщо буду міняти і видаляти incrementLimit, то перйеменувати limit на onPageLimit
//   } = initialValues || {};

//   const [queryParams, setQueryParams] = useSearchParams();

//   const [page, setPage] = useState(pageInitialValue);
//   const [limit, setLimit] = useState(limitInitialValue);
//   const [offset, setOffset] = useState(offsetInitialValue);
//   const [isChangedPage, setIsChangedPage] = useState(false);
//   const [isChangedLimit, setIsChangedLimit] = useState(false);
//   const [isChangedOffset, setIsChangedOffset] = useState(false);

//   const isChangedQueryParams =
//     isChangedPage || isChangedLimit || isChangedOffset;

//   const setQueryParamPage: SetQueryParam = (page) =>
//     setQueryParams(`${PAGE_QUERY_PARAM_KEY}=${page}`);

//   const setQueryParamLimit: SetQueryParam = (limit) =>
//     setQueryParams(`${LIMIT_QUERY_PARAM_KEY}=${limit}`);

//   const setQueryParamOffset: SetQueryParam = (offset) =>
//     setQueryParams(`${OFFSET_QUERY_PARAM_KEY}=${offset}`);

//   const incrementLimit = () => setQueryParamLimit(limit + limitInitialValue);

//   useEffect(() => {
//     const pageQueryParam = queryParams.get(PAGE_QUERY_PARAM_KEY);
//     const limitQueryParam = Number(queryParams.get(LIMIT_QUERY_PARAM_KEY));
//     const offsetQueryParam = Number(queryParams.get(OFFSET_QUERY_PARAM_KEY));

//     if (pageQueryParam) {
//       setIsChangedPage(pageQueryParam !== page);
//       setPage(pageQueryParam);
//     }

//     if (limitQueryParam) {
//       setIsChangedLimit(limitQueryParam !== limit);
//       setLimit(limitQueryParam);
//     }

//     if (offsetQueryParam) {
//       setIsChangedOffset(offsetQueryParam !== offset);
//       setOffset(offsetQueryParam);
//     }
//   }, [queryParams, page, limit, offset]);

//   return {
//     pageInitialValue,
//     limitInitialValue,
//     offsetInitialValue,
//     page,
//     limit,
//     offset,
//     isChangedPage,
//     isChangedLimit,
//     isChangedOffset,
//     isChangedQueryParams,
//     setQueryParamPage,
//     setQueryParamLimit,
//     setQueryParamOffset,
//     incrementLimit,
//   };
// };

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_QUERY_PARAM_KEY = "page";
const LIMIT_QUERY_PARAM_KEY = "limit";
const OFFSET_QUERY_PARAM_KEY = "offset";

export type SetQueryParamPage = (value: number | string) => void;
export type SetQueryParam = (value: number) => void;

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

  const setQueryParamPage: SetQueryParamPage = useCallback(
    (page) => {
      queryParams.set(PAGE_QUERY_PARAM_KEY, String(page));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
  );

  const setQueryParamLimit: SetQueryParam = useCallback(
    (limit) => {
      queryParams.set(LIMIT_QUERY_PARAM_KEY, String(limit));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
  );

  const setQueryParamOffset: SetQueryParam = useCallback(
    (offset) => {
      queryParams.set(OFFSET_QUERY_PARAM_KEY, String(offset));
      setQueryParams(queryParams);
    },
    [setQueryParams, queryParams]
  );

  // const incrementLimit = () => setLimit((prev) => prev + limitInitialValue);

  useEffect(() => {
    if (page) {
      setQueryParamPage(page);
      // дублюю  параметри хоча вони можуть братися автомат + можна спробувати одразу при додаванні в стейт робити строку із того всього
    }
  }, [setQueryParamPage, page, pageQueryParam, pageInitialValue]);

  useEffect(() => {
    if (limit && limit !== limitInitialValue) {
      setQueryParamLimit(limit);
    }
  }, [setQueryParamLimit, limit, limitInitialValue]);

  useEffect(() => {
    if (offset && offset !== offsetInitialValue) {
      setQueryParamOffset(offset);
    }
  }, [setQueryParamOffset, offset, offsetInitialValue]);

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
