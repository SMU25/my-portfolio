import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectWorks } from "src/redux/works/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { PATHNAMES } from "src/constants/routes";

const WORKS_LIMIT_MAX_COUNT = 3;

const HEADING = "Featured works";

export const FeaturedWorks: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: WORKS_LIMIT_MAX_COUNT }));
  }, [dispatch]);

  const works = useAppSelector(selectWorks);

  return (
    <div>
      <ContainerHead title={HEADING} href={PATHNAMES.PORTFOLIO} />
      <Works className="border-t border-gray-lighter" items={works} />
    </div>
  );
};
