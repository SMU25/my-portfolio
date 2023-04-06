import React, { FC, FormEvent } from "react";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";
import { FormikProvider, useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { sendFeedbackForm } from "src/redux/feedbackForm/action";
import { selectIsLoading } from "src/redux/feedbackForm/selectors";
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

export const FeedbackForm: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  const formikProps = {
    initialValues: {
      ...getFormikInitialValues(FEEDBACK_FIELDS),
      message: "",
    },
    onSubmit: (values) => dispatch(sendFeedbackForm(values)),
    validationSchema: FEEDBACK_VALIDATION_SCHEMA,
  };

  const formik = useFormik(formikProps);
  const { isValid, handleSubmit, handleReset } = formik;

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    handleReset(e);
  };

  return (
    <>
      <ContainerHead
        titleClassName="sm:text-4xl font-extrabold default:max-w-none"
        title={t(`${T_PREFIX} - ${HEADING}`)}
      />
      <FormikProvider value={formik}>
        <form onSubmit={onSubmitForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-13.5 mt-7.5">
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
              "max-w-none xs:max-w-61.5 w-full mt-10 py-4.5 text-2xl font-medium leading-7",
              { "!py-3.5": isLoading }
            )}
            variant={ButtonVariants.SECONDARY}
            isDisabled={!isValid}
            isLoading={isLoading}
          >
            <Trans>{`${T_PREFIX} - ${SEND_BUTTON_NAME}`}</Trans>
          </Button>
        </form>
      </FormikProvider>
    </>
  );
};
