import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectWorks } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_HEADING_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const WORKS_LIMIT_MAX_COUNT = 5;

const HEADING = "Portfolio";

const Portfolio: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: WORKS_LIMIT_MAX_COUNT }));
  }, [dispatch]);

  const works = useAppSelector(selectWorks);

  return (
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        titleClassName={DEFAULT_HEADING_CLASS_NAME}
        title={HEADING}
      />
      <Works className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME} items={works} />
    </SectionWrapper>
  );
};

export default Portfolio;
