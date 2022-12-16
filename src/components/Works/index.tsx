import React, { FC } from "react";
import { IWorkItem } from "src/types/work";
import { WorkCard } from "./WorkCard";

interface Props {
  className?: string;
  items: IWorkItem[];
}

export const Works: FC<Props> = ({ className, items }) => {
  if (!items?.length) return null;

  return (
    <div className={className}>
      {items.map(({ id, ...item }) => (
        <WorkCard key={id} {...item} />
      ))}
    </div>
  );
};
