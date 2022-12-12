import React, { FC } from "react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

const PROFILE_IMG = {
  SRC: "https://scontent.frwn1-1.fna.fbcdn.net/v/t39.30808-6/228887766_3017452501906851_4381980517078749345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WRyaHDw0DPQAX_SdXZB&_nc_oc=AQmq-CASVDCnO9caMxm4tQIZT-WlCdkF0wRCN2wifpdMwMjWUiwfBVUjkvMwxVo4xuI&_nc_ht=scontent.frwn1-1.fna&oh=00_AfCSvSs-_BmhxnWsVYP8604DdbSO0YfaqoQb2Qe2Sca2dA&oe=639A5DF2",
  ALT_TEXT: "Image of Oleksandr Myronchuk",
};

const HEADING = "Hi, I am John, Creative Technologist";
const DESCRIPTION = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.`;
const DOWNLOAD_RESUME_BUTTON_NAME = "Download Resume";
//CHANGE - add translate

export const AboutMySelf: FC = () => (
  <div className="flex justify-between items-start xl:items-center">
    <div className="sm:max-w-118 xl:max-w-161 w-full">
      <Heading
        className="mt-4.5 capitalize text-3xl md:text-44 xl:text-6xl leading-10 md:leading-15 xl:leading-17"
        tagHeading={TagsHeading.H2}
      >
        {HEADING}
      </Heading>
      <p className="mt-2 md:mt-10 xl:mt-6 xl:text-xl leading-6">
        {DESCRIPTION}
      </p>
      {/* CHANGE - add constant for name file */}
      <a href="." download="Resume of Oleksandr Myronchuk.pdf">
        <Button className="mt-9.5 capitalize text-xl font-medium">
          {DOWNLOAD_RESUME_BUTTON_NAME}
        </Button>
      </a>
    </div>

    <img
      className="w-60.5 h-60.5 xl:w-112.5 xl:h-112.5 ml-10 lg:ml-28 rounded-full shadow-lining-lighter-blue"
      src={PROFILE_IMG.SRC}
      alt={PROFILE_IMG.ALT_TEXT}
    />
  </div>
);
