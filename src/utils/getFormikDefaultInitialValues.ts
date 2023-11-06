import { IFormField } from "src/types/form";

export const getFormikDefaultInitialValues = <T>(
  fields: IFormField[],
  ...otherFieldsNames: string[]
): Record<keyof T, string> => {
  const otherFields = otherFieldsNames.map((name) => ({ name }));
  const allFields = [...fields, ...otherFields];

  const initialValues = Object.fromEntries(
    allFields.map(({ name }) => [name, ""])
  ) as Record<keyof T, string>;

  return initialValues;
};
