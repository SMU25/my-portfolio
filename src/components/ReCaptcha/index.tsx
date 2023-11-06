import React, { FC, useEffect, useRef } from "react";
import { FormikProps, FormikValues } from "formik";
import { loadReCaptcha, ReCaptcha as Recaptcha } from "react-recaptcha-google";
import { Error } from "../Error";

const FIELD_NAME = "recaptcha";

interface Props {
  className?: string;
  sitekey?: string;
  render?: string;
  onloadCallback?: VoidFunction;
  formik: FormikProps<FormikValues>;
}

// CHANGE  - повиносити ключі в енв файл скрізь

export const ReCaptcha: FC<Props> = ({
  className,
  sitekey = "6Leffy8lAAAAAHZAOyJH3f9yc5ibTFJ7C54JYl4D",
  render = "explicit",
  onloadCallback,
  formik,
}) => {
  const recaptchaRef = useRef(null);

  const { errors, setFieldValue } = formik;
  const error = errors[FIELD_NAME];

  const verifyCallback = () => setFieldValue(FIELD_NAME, "true");

  useEffect(() => {
    loadReCaptcha();
  }, []);

  return (
    <div className={className}>
      <Recaptcha
        ref={recaptchaRef}
        sitekey={sitekey}
        render={render}
        onloadCallback={onloadCallback}
        verifyCallback={verifyCallback}
      />
      {/* <Error isShownError={Boolean(error)}>{error}</Error> */}
    </div>
  );
};
