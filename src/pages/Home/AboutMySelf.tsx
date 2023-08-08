import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

export const RESUME_LINKS = {
  uk: "https://drive.google.com/file/d/1KiR48q0TXmkTbfWYx1XEIouv8Gb8BVvB/view?usp=sharing",
  en: "https://drive.google.com/file/d/1hFDbpfM57Uac9yJVEnsY8PnrUK67shWC/view?usp=sharing",
};

const PROFILE_IMG = {
  SRC: "https://lh3.googleusercontent.com/a/AAcHTteSC1NOcktlHaJMM7gjdTAzc_FNG60x6ujublZ_n1CAyKaH=s288-c-no",
  ALT_TEXT: "Image of Oleksandr Myronchuk",
};

const T_PREFIX = "about-my-self";

const HEADING = "title";
const DESCRIPTION = "description";
const VIEW_RESUME_BUTTON_NAME = "view-resume-btn";

export const AboutMySelf: FC = () => {
  const { t, i18n } = useTranslation();

  const resumeLink = RESUME_LINKS[i18n.language];

  return (
    <SectionWrapper
      className="pt-8.5 sm:pt-35 pb-15 sm:pb-17"
      innerContainerClassName="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center sm:items-start xl:items-center"
    >
      <div className="sm:max-w-118 xl:max-w-161 w-full text-center sm:text-left">
        <Heading
          className="mt-8.5 sm:mt-4.5 capitalize text-3xl md:text-44 xl:text-6xl default:leading-10 sm:leading-11 xl:leading-17"
          tagHeading={TagsHeading.H2}
        >
          {t(`${T_PREFIX} - ${HEADING}`)}
        </Heading>
        <p className="mt-5 sm:mt-2 md:mt-10 xl:mt-6 xl:text-xl leading-6">
          {t(`${T_PREFIX} - ${DESCRIPTION}`)}
        </p>
        {/* CHANGE - add constant for name file */}
        {/* В залежності від мови, таке і резюме повинно завантажуватися
         */}
        <a href={resumeLink} target="_blank" rel="noreferrer">
          <Button className="mt-6.5 sm:mt-9.5 text-xl !rounded-full">
            {t(`${T_PREFIX} - ${VIEW_RESUME_BUTTON_NAME}`)}
          </Button>
        </a>
      </div>
      <img
        className="w-45 h-45 xs:w-60.5 xs:h-60.5 xl:w-112.5 xl:h-112.5 sm:ml-10 lg:ml-28 rounded-full shadow-lining-lighter-blue"
        src={PROFILE_IMG.SRC}
        alt={PROFILE_IMG.ALT_TEXT}
      />
    </SectionWrapper>
  );
};
