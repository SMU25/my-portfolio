import React from "react";
import { WorkCard } from "./WorkCard";

export const Works = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <WorkCard
          key={item}
          className="first:border-t"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4gH5NGHUSQc73A5PzMfaGT4gkkQMepN9Cg&usqp=CAU"
          title="Designing Dashboards"
          dateCreated={new Date()}
          category="Dashboard"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      ))}
    </div>
  );
};
