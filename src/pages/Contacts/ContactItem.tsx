import React, { FC } from "react";
import { Trans } from "react-i18next";
interface Props {
  title?: string;
  linkLabel?: string;
  link: string;
  isOpenNewTab?: boolean;
}

const T_PREFIX = "contact-item";

export const ContactItem: FC<Props> = ({
  title,
  linkLabel,
  link,
  isOpenNewTab,
}) => {
  if (!link) return null;

  return (
    <div className="mt-6 text-2xl leading-9">
      <p>
        <Trans>{`${T_PREFIX} - ${title}`}</Trans>
      </p>
      <a
        href={link}
        className="text-blue-light font-bold break-words transition-all hover:brightness-50"
        target={isOpenNewTab ? "_blank" : ""}
        rel="noreferrer"
      >
        {linkLabel || link}
      </a>
    </div>
  );
};
