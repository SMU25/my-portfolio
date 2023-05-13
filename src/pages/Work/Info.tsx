import React, { FC } from "react";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";
import { IWorkItem } from "src/types/work";

const DATE_FORMAT = "yyyy";

export const Info: FC<Omit<IWorkItem, "id" | "imageAlbum">> = ({
  title,
  description,
  category,
  createdAt,
  screenSaver,
}) => {
  const date = format(createdAt, DATE_FORMAT, {
    locale: DATE_LOCALES[activeLanguage],
  });

  return (
    <div className="pb-13.5">
      <Heading
        className="max-w-195 text-34 leading-12.5"
        tagHeading={TagsHeading.H2}
      >
        {title}
      </Heading>
      <div className="flex items-center mt-7.5">
        <MarkLabel className="bg-red-light ml-1">{date}</MarkLabel>
        <span className="ml-4.5 text-xl leading-7">{category}</span>
      </div>
      <p className="mt-6 text-black-base leading-6">{description}</p>
      <img className="w-full mt-11.5" src={screenSaver} alt={title} />
    </div>
  );
};
