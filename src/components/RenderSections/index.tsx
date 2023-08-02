import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";

interface SectionItem {
  id: number;
  component: FC;
  className?: string;
  innerWrapperClassName?: string;
}

interface Props {
  sections: SectionItem[];
}

export const RenderSections: FC<Props> = ({ sections, ...props }) => (
  <>
    {sections.map(({ id, component: Component, ...section }) => (
      <SectionWrapper key={id} {...section} {...props}>
        <Component />
      </SectionWrapper>
    ))}
  </>
);
