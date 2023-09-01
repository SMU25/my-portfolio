import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const NAME_VALIDATION_SCHEMA = yup
  .string()
  .min(2, {
    i18nKey: "min-symbols",
    i18nParams: { count: 2 },
  })
  .max(50, {
    i18nKey: "max-symbols",
    i18nParams: { count: 50 },
  });

export const PHONE_VALIDATION_SCHEMA = yup
  .string()
  .required("required")
  .min(9, {
    i18nKey: "min-symbols",
    i18nParams: { count: 9 },
  })
  .max(19, {
    i18nKey: "max-symbols",
    i18nParams: { count: 20 },
  })
  .matches(
    /^((\+[1-9]{1,4}[ -]*)|(\([0-9]{2,3}\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}[ -]*[0-9]{3,4}([ -]*x[0-9]+)?$/,
    "incorrect-phone-number"
  )
  .test("error", (phone) => (phone ? isValidPhoneNumber(phone) : true));

export const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .min(3, {
    i18nKey: "min-symbols",
    i18nParams: { count: 3 },
  })
  .max(320, {
    i18nKey: "max-symbols",
    i18nParams: { count: 320 },
  })
  .email("incorrect-email")
  .required("required");
