import { IFormField } from "src/types/form";

export const getFormikInitialValues = (fields: IFormField[]) =>
  Object.fromEntries(fields.map(({ name }) => [name, ""]));
