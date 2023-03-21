import * as yup from "yup";

export const NAME_VALIDATION_SCHEMA = yup.string().min(2, {
  i18nKey: "min-symbols",
  i18nParams: { count: 2 },
});

export const PHONE_VALIDATION_SCHEMA = yup
  .string()
  .email("incorrect-email")
  .required("required");

export const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .required("required")
  .min(9, {
    i18nKey: "min-symbols",
    i18nParams: { count: 9 },
  })
  .max(15, {
    i18nKey: "max-symbols",
    i18nParams: { count: 15 },
  });
