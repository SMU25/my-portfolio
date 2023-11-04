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
  src: "https://lh3.googleusercontent.com/a/AAcHTteSC1NOcktlHaJMM7gjdTAzc_FNG60x6ujublZ_n1CAyKaH=s288-c-no",
  alt: "Oleksandr Myronchuk",
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
      className="pt-8.5 sm:pt-15 lg:pt-35 pb-15 sm:pb-17"
      innerContainerClassName="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center"
    >
      <div className="lg:min-w-118 xl:min-w-161 lg:max-w-118 gl:max-w-161 w-full text-center lg:text-left">
        <Heading
          className="mt-8.5 lg:mt-4.5 capitalize text-3xl md:text-44 xl:text-6xl default:leading-10 sm:leading-12.5 xl:leading-17"
          tagHeading={TagsHeading.H2}
        >
          {t(`${T_PREFIX} - ${HEADING}`)}
        </Heading>
        <p className="mt-5 lg:mt-2 md:mt-10 xl:mt-6 text-justify xl:text-xl leading-6">
          {t(`${T_PREFIX} - ${DESCRIPTION}`)}
        </p>
        <a href={resumeLink} target="_blank" rel="noreferrer">
          <Button className="max-w-72.5 w-full mt-6.5 lg:mt-9.5 text-xl !rounded-full">
            {t(`${T_PREFIX} - ${VIEW_RESUME_BUTTON_NAME}`)}
          </Button>
        </a>
      </div>
      <div className="w-full max-w-50 xs:max-w-75 sm:max-w-100 lg:max-w-125 lg:xl:max-w-150 h-full max-h-50 xs:max-h-75 sm:max-h-100 lg:max-h-125 xl:max-h-150 lg:ml-28">
        <img
          className="w-full h-full shadow-lining-lighter-blue rounded-full"
          {...PROFILE_IMG}
        />
      </div>
    </SectionWrapper>
  );
};
