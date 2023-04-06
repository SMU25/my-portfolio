import React, { FC } from "react";
import { Trans } from "react-i18next";
interface Props {
  title?: string;
  linkLabel?: string;
  link: string;
}

const T_PREFIX = "contact-item";

export const ContactItem: FC<Props> = ({ title, linkLabel, link }) => {
  if (!link) return null;

  return (
    <div className="mt-6 text-2xl leading-9">
      <p>
        <Trans>{`${T_PREFIX} - ${title}`}</Trans>
      </p>
      <a href={link} className="text-blue-light font-bold">
        {linkLabel || link}
      </a>
    </div>
  );
};
