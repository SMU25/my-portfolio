import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorks } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Loader } from "src/components/Loader";
import { TagsHeading } from "src/components/Heading/types";
import { Sizes } from "src/types/sizes";
import { ReactComponent as ArrowRotate } from "src/assets/arrow-rotate.svg";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const ARROW_ROTATE_ICON_SIZE = 24;

const MAX_COUNT_WORKS_LIMIT = 5;

const T_PREFIX = "portfolio";

const HEADING = "title";

// CHANGE - Додати ліміт , оффсет та номер сторінки в редакс або в query параметри + пагінацію додати
// Додати,якщо ліміт = 5 , то не відображає загрузку на кнопці, і може ще додати цю кнопку в компонент окремий

const Portfolio: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const works = useAppSelector(selectWorks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: MAX_COUNT_WORKS_LIMIT }));
  }, [dispatch]);

  return (
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        tagHeading={TagsHeading.H2}
      />
      <Works
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        isLoading={isLoading}
        items={works}
        maxCountItemsPreloader={MAX_COUNT_WORKS_LIMIT}
      />
      <div className="flex justify-center w-full mt-6">
        <Button
          className="flex items-center px-10 hover:fill-white-g"
          variant={ButtonVariants.BORDERED_SECONDARY}
          // isDisabled={isLoading}
          // onClick={() => dispatch(getWorksAsync({ limit: 15 }))}
        >
          {isLoading ? (
            <Loader size={Sizes.S} />
          ) : (
            <ArrowRotate
              className="rotate-12"
              width={ARROW_ROTATE_ICON_SIZE}
              height={ARROW_ROTATE_ICON_SIZE}
            />
          )}
          <span className="ml-4"></span>
          Show more (+5)
        </Button>
      </div>
      pagination
    </SectionWrapper>
  );
};

export default Portfolio;
