import React from "react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

const HEADING = "Hi, I am John, Creative Technologist";
const DESCRIPTION = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.`;
const DOWNLOAD_RESUME_BUTTON_NAME = "Download Resume";
//CHANGE - add translate

const PROFILE_IMG = {
  SRC: "https://scontent.frwn1-1.fna.fbcdn.net/v/t39.30808-6/228887766_3017452501906851_4381980517078749345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WRyaHDw0DPQAX_SdXZB&_nc_oc=AQmq-CASVDCnO9caMxm4tQIZT-WlCdkF0wRCN2wifpdMwMjWUiwfBVUjkvMwxVo4xuI&_nc_ht=scontent.frwn1-1.fna&oh=00_AfCSvSs-_BmhxnWsVYP8604DdbSO0YfaqoQb2Qe2Sca2dA&oe=639A5DF2",
  ALT: "Image of Oleksandr Myronchuk",
};

export const AboutMySelf = () => (
  <div className="flex justify-center items-start">
    <div className="max-w-118 w-full">
      <Heading
        className="mt-4.5 text-44 leading-15"
        tagHeading={TagsHeading.H2}
      >
        {HEADING}
      </Heading>
      <p className="mt-10 leading-6">{DESCRIPTION}</p>
      <Button
        className="mt-9.5 capitalize text-xl font-medium"
        onClick={() => {}} //CHANGE - deleted
      >
        {DOWNLOAD_RESUME_BUTTON_NAME}
      </Button>
    </div>
    <img
      className="w-60.5 h-60.5 ml-28 rounded-full shadow-lining-lighter-blue"
      src={PROFILE_IMG.SRC}
      alt={PROFILE_IMG.ALT}
    />
  </div>
);
