import React, { FC } from "react";

interface Props {
  title?: string;
  linkLabel?: string;
  link: string;
}

export const ContactItem: FC<Props> = ({ title, linkLabel, link }) => {
  if (!link) return null;

  return (
    <div className="mt-6 text-2xl leading-9">
      <p>{title}</p>
      <a href={link} className="text-blue-light font-bold">
        {linkLabel || link}
      </a>
    </div>
  );
};
