import React, { FC } from "react";
import { Trans } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

const PROFILE_IMG = {
  SRC: "https://scontent.frwn1-1.fna.fbcdn.net/v/t39.30808-6/228887766_3017452501906851_4381980517078749345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WRyaHDw0DPQAX_SdXZB&_nc_oc=AQmq-CASVDCnO9caMxm4tQIZT-WlCdkF0wRCN2wifpdMwMjWUiwfBVUjkvMwxVo4xuI&_nc_ht=scontent.frwn1-1.fna&oh=00_AfCSvSs-_BmhxnWsVYP8604DdbSO0YfaqoQb2Qe2Sca2dA&oe=639A5DF2",
  SIZE: 450,
  ALT_TEXT: "Image of Oleksandr Myronchuk",
};

const T_PREFIX = "about-my-self";

const HEADING = "title";
const DESCRIPTION = "description";
const DOWNLOAD_RESUME_BUTTON_NAME = "download-resume";

export const AboutMySelf: FC = () => (
  <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center sm:items-start xl:items-center">
    <div className="sm:max-w-118 xl:max-w-161 w-full text-center sm:text-left">
      <Heading
        className="mt-8.5 sm:mt-4.5 capitalize text-3xl md:text-44 xl:text-6xl leading-10 md:leading-15 xl:leading-17"
        tagHeading={TagsHeading.H2}
      >
        <Trans>{`${T_PREFIX} - ${HEADING}`}</Trans>
      </Heading>
      <p className="mt-5 sm:mt-2 md:mt-10 xl:mt-6 xl:text-xl leading-6">
        <Trans>{`${T_PREFIX} - ${DESCRIPTION}`}</Trans>
      </p>
      {/* CHANGE - add constant for name file */}
      <a href="." download="Resume of Oleksandr Myronchuk.pdf">
        <Button className="mt-6.5 sm:mt-9.5 capitalize text-xl font-medium">
          <Trans>{`${T_PREFIX} - ${DOWNLOAD_RESUME_BUTTON_NAME}`}</Trans>
        </Button>
      </a>
    </div>
    <img
      className="w-45 h-45 xs:w-60.5 xs:h-60.5 xl:w-112.5 xl:h-112.5 sm:ml-10 lg:ml-28 rounded-full shadow-lining-lighter-blue"
      src={PROFILE_IMG.SRC}
      width={PROFILE_IMG.SIZE}
      height={PROFILE_IMG.SIZE}
      alt={PROFILE_IMG.ALT_TEXT}
    />
  </div>
);
