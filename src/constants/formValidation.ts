import * as yup from "yup";
// import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

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
    i18nParams: { count: 19 },
  })
  .matches(
    /^((\+[1-9]{1,4}[ -]*)|(\([0-9]{2,3}\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}[ -]*[0-9]{3,4}([ -]*x[0-9]+)?$/,
    "incorrect-phone-number"
  );
// .test("error", (phone) => {
//   if (phone) {
//     return isValidPhoneNumber(phone, "UA");
//   }

//   return true;
// });

export const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email("incorrect-email")
  .required("required");
