import React from "react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

const HEADING = "Hi, I am John, Creative Technologist";
const DESCRIPTION = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.`;
const DOWNLOAD_RESUME_BUTTON_NAME = "Download Resume";

const PROFILE_IMG = {
  SRC: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  ALT: "Image of Oleksandr Myronchuk",
};

export const AboutMySelf = () => (
  <div className="flex justify-center items-start">
    <div className="max-w-118 w-full">
      <Heading
        classNames="mt-4.5 text-44 leading-15"
        tagHeading={TagsHeading.H2}
      >
        {HEADING}
      </Heading>
      <p className="mt-10 leading-6">{DESCRIPTION}</p>
      <Button
        className="mt-9.5 capitalize text-xl font-medium"
        onClick={() => {}} //deleted
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
