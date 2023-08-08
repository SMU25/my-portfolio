import React, { FC, SVGProps } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";

interface Props {
  title?: string;
  linkLabel?: string;
  link: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  isOpenNewTab?: boolean;
}

const T_PREFIX = "contact-item";

export const ContactItem: FC<Props> = ({
  title,
  linkLabel,
  link,
  icon: Icon,
  isOpenNewTab,
}) => {
  const { t } = useTranslation();

  const target = isOpenNewTab ? "_blank" : "_self";

  if (!link) return null;

  return (
    <li>
      <Heading
        className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl leading-4.5 sm:leading-5.5 md:leading-6 lg:leading-7 !font-normal"
        tagHeading={TagsHeading.H4}
      >
        {Icon && (
          <a href={link} target={target} rel="noreferrer">
            <Icon className="mr-2 transition-all duration-300 hover:scale-110" />
          </a>
        )}
        <span>{t(`${T_PREFIX} - ${title}`)}</span>
      </Heading>
      <a
        href={link}
        className="text-blue-light text-base sm:text-lg md:text-xl lg:text-2xl leading-5.5 sm:leading-7 md:leading-8 lg:leading-9 font-bold break-words transition-all hover:brightness-50"
        target={target}
        rel="noreferrer"
      >
        {linkLabel || link}
      </a>
    </li>
  );
};
