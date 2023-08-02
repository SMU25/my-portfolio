import React, { FC } from "react";
import { IRenderFormField } from "src/types/form";

interface Props {
  fields: IRenderFormField[];
}

export const RenderFormField: FC<Props> = ({ fields = [], ...props }) => (
  <>
    {fields.map(({ component: Field, ...field }) => (
      <Field key={field.name} {...field} {...props} />
    ))}
  </>
);
