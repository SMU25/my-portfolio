import React, { FC } from "react";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";
import { FormikProvider, useFormik } from "formik";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { RenderFormField } from "src/components/RenderFormField";
import { Textarea } from "src/components/FormField/Textarea";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { getFormikInitialValues } from "src/utils/getFormikInitialValues";
import { FEEDBACK_FIELDS, FEEDBACK_VALIDATION_SCHEMA } from "./constants";
// import { ReCaptcha } from "src/components/ReCaptcha";

const T_PREFIX = "feedback";

const HEADING = "title";
const SEND_BUTTON_NAME = "send";

export const Feedback: FC = () => {
  const { t } = useTranslation();

  const formikProps = {
    initialValues: {
      ...getFormikInitialValues(FEEDBACK_FIELDS),
      message: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: FEEDBACK_VALIDATION_SCHEMA,
  };

  const formik = useFormik(formikProps);
  const { isValid, handleSubmit, handleReset } = formik;

  return (
    <>
      <ContainerHead
        titleClassName="sm:text-4xl font-extrabold"
        title={t(`${T_PREFIX} - ${HEADING}`)}
      />
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-y-6 gap-x-13.5 mt-7.5">
            <RenderFormField fields={FEEDBACK_FIELDS} />
          </div>
          <Textarea
            containerClassName="mt-7.5"
            name="message"
            label="message"
          />
          {/* <ReCaptcha className="mt-10" formik={formik} /> */}
          <Button
            className={cn(
              "max-w-61.5 w-full mt-10 py-4.5 text-2xl font-medium leading-7",
              { "!py-3.5": false }
            )}
            variant={ButtonVariants.SECONDARY}
            isDisabled={!isValid}
            // isLoading
          >
            <Trans>{`${T_PREFIX} - ${SEND_BUTTON_NAME}`}</Trans>
          </Button>
        </form>
      </FormikProvider>
    </>
  );
};
