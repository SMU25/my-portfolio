import React, { FC } from "react";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";
import { IWorkItem } from "src/types/work";
import { ReactComponent as GitHubIcon } from "src/assets/github.svg";

const GITHUB_ICON_SIZE = 24;

const DATE_FORMAT = "yyyy";

export const Info: FC<IWorkItem> = ({
  title,
  description,
  category,
  createdAt,
  screenSaver,
  projectLinks,
}) => {
  const date = format(createdAt, DATE_FORMAT, {
    locale: DATE_LOCALES[activeLanguage],
  });

  const { deployedProjectName, deployedProjectUrl, githubProjectUrl } =
    projectLinks || {};

  const projectLinkName = deployedProjectName || deployedProjectUrl;

  return (
    <div className="pb-13.5">
      <Heading
        className="max-w-195 text-34 leading-12.5"
        tagHeading={TagsHeading.H2}
      >
        {title}
      </Heading>
      {projectLinks && (
        <div className="flex items-center my-3">
          {projectLinkName && (
            <a
              className="text-blue-light transition-all hover:brightness-50"
              href={deployedProjectUrl}
              target="_blank"
              rel="noreferrer"
            >
              {projectLinkName}
            </a>
          )}

          {githubProjectUrl && (
            <a
              className="ml-3 transition-all duration-300 hover:scale-125"
              href={githubProjectUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon width={GITHUB_ICON_SIZE} height={GITHUB_ICON_SIZE} />
            </a>
          )}
        </div>
      )}
      <div className="flex items-center">
        <MarkLabel className="bg-red-light ml-1">{date}</MarkLabel>
        <span className="ml-4.5 text-xl leading-7">{category}</span>
      </div>
      <p className="mt-6 text-black-base leading-6">{description}</p>
      <img className="w-full mt-11.5" src={screenSaver} alt={title} />
    </div>
  );
};
