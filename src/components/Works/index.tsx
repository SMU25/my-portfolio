import React, { FC } from "react";
import { WorkCard } from "./WorkCard";

interface Props {
  className?: string;
}

export const Works: FC<Props> = ({ className }) => (
  <div className={className}>
    {[1, 2, 3, 4].map((item) => (
      <WorkCard
        key={item}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4gH5NGHUSQc73A5PzMfaGT4gkkQMepN9Cg&usqp=CAU"
        title="Designing Dashboards"
        dateCreated={new Date()}
        category="Dashboard"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    ))}
  </div>
);
