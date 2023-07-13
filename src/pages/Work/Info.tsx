import React, { FC } from "react";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";
import { SkillsAndTechnologies } from "src/components/SkillsAndTechnologies";
import { IWorkItem } from "src/types/work";
import { ReactComponent as GitHubIcon } from "src/assets/github.svg";
import { Description } from "./Description";

const LINK_TEXT_CLASSNAME =
  "mr-3 text-blue-light transition-all hover:brightness-50";

const GITHUB_ICON_SIZE = 24;

const DATE_FORMAT = "yyyy";

export const Info: FC<IWorkItem> = ({
  title,
  description,
  category,
  createdAt,
  screenSaver,
  projectLinks,
  skillsAndTechnologies,
}) => {
  const date = format(createdAt, DATE_FORMAT, {
    locale: DATE_LOCALES[activeLanguage],
  });

  const { github, deployed } = projectLinks || {};
  const githubUrl = github?.url;
  const deployedUrl = deployed?.url;

  const projectLinkName = deployed?.urlName || deployedUrl;

  return (
    <div className="pb-13.5">
      <div>
        <Heading
          className="max-w-195 text-34 default:leading-9 sm:leading-12.5"
          tagHeading={TagsHeading.H2}
        >
          {title}
        </Heading>
        {projectLinks && (
          <div className="flex items-center mt-1 sm:mt-2">
            {deployed && (
              <a
                className={LINK_TEXT_CLASSNAME}
                href={deployedUrl}
                target="_blank"
                rel="noreferrer"
              >
                {projectLinkName}
              </a>
            )}

            {githubUrl && (
              <a
                className="flex items-center"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {!deployed && (
                  <span className={LINK_TEXT_CLASSNAME}>{githubUrl}</span>
                )}
                <GitHubIcon
                  className="transition-all duration-300 hover:scale-125"
                  width={GITHUB_ICON_SIZE}
                  height={GITHUB_ICON_SIZE}
                />
              </a>
            )}
          </div>
        )}
        <div className="flex items-center mt-1 sm:mt-3">
          <MarkLabel className="ml-1">{date}</MarkLabel>
          <span className="ml-4.5 text-xl leading-7">{category}</span>
        </div>
      </div>
      <img
        className="w-full max-h-125 object-cover mt-3 sm:mt-4 rounded-10"
        src={screenSaver}
        alt={title}
      />
      <SkillsAndTechnologies
        className="mt-2"
        items={
          skillsAndTechnologies || [
            { key: "typescript", title: "TypeScript" },
            { key: "scss", title: "SCSS" },
            { key: "figma", title: "Figma" },
            { key: "web-app", title: "Web Application" },
            { key: "html", title: "HTML" },
            { key: "css", title: "CSS" },
            { key: "javascript", title: "JavaScript" },
            { key: "react", title: "React" },
            { key: "redux", title: "Redux" },
            { key: "tailwind", title: "TailwindCSS" },
            { key: "resposive-design", title: "Resposive design" },
            { key: "git", title: "Git" },
            {
              key: "front-end",
              title: "front-end",
            },
            {
              key: "back-end",
              title: "back-end",
            },
            { key: "website", title: "Website" },
          ]
        }
      />
      <Description>{description}</Description>
    </div>
  );
};
