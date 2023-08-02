import React, { FC } from "react";
import { IRenderFormField } from "src/types/form";

interface Props {
  fields: IRenderFormField[];
}

export const RenderFormField: FC<Props> = ({ fields = [], ...props }) => (
  <>
    {fields.map(({ component, ...field }) => {
      const Field = component;

      return <Field key={field.name} {...field} {...props} />;
    })}
  </>
);
