import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";

interface SectionItem {
  id: number;
  component: FC;
  className?: string;
}

interface Props {
  sections: SectionItem[];
}

export const RenderSections: FC<Props> = ({ sections, ...props }) => (
  <>
    {sections.map(({ id, component, className }) => {
      const Component = component;

      return (
        <SectionWrapper key={id} className={className} {...props}>
          <Component />
        </SectionWrapper>
      );
    })}
  </>
);
