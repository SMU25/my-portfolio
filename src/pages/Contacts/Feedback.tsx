import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { FEEDBACK_FIELDS } from "./constants";

const T_PREFIX = "feedback";

const HEADING = "title";

export const Feedback: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerHead
        titleClassName="sm:text-4xl font-extrabold"
        title={t(`${T_PREFIX} - ${HEADING}`)}
      />

      <form>
        {/* Створити функцію для рендера форми, щоб обгорнути усі поля у філд і т.д. */}
      </form>
    </>
  );
};
