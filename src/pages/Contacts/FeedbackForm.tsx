import React, { FC, FormEvent } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FormikProvider, useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { sendFeedbackForm } from "src/redux/feedbackForm/action";
import { selectIsLoading } from "src/redux/feedbackForm/selectors";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { RenderFormField } from "src/components/RenderFormField";
import { Textarea } from "src/components/FormField/Textarea";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { getFormikInitialValues } from "src/utils/getFormikInitialValues";
import { FEEDBACK_FIELDS, FEEDBACK_VALIDATION_SCHEMA } from "./constants";
// import { ReCaptcha } from "src/components/ReCaptcha";

// CHANGE - модалку виводити після відправки форми

const T_PREFIX = "feedback";

const HEADING = "title";
const MESSAGE_FIELD_NAME = "message";
const SEND_BUTTON_NAME = "send-btn";

export const FeedbackForm: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  const formikProps = {
    initialValues: {
      ...getFormikInitialValues(FEEDBACK_FIELDS),
      [MESSAGE_FIELD_NAME]: "",
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
      <Heading
        className="default:text-2xl sm:text-4xl font-extrabold default:max-w-none"
        tagHeading={TagsHeading.H3}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <FormikProvider value={formik}>
        <form onSubmit={onSubmitForm}>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4.5 sm:gap-y-5.5 md:gap-y-6 gap-x-6 md:gap-x-8 lg:gap-x-13.5 mt-3.5 xs:mt-4 sm:mt-6 md:mt-7.5">
            <RenderFormField fields={FEEDBACK_FIELDS} />
          </div>
          <Textarea
            containerClassName="mt-6 sm:mt-7 md:mt-7.5"
            name={MESSAGE_FIELD_NAME}
            label={MESSAGE_FIELD_NAME}
          />
          {/* <ReCaptcha className="mt-10" formik={formik} /> */}
          <Button
            className={cn(
              "max-w-none xs:max-w-61.5 w-full mt-4.5 xs:mt-6 sm:mt-8 md:mt-10 md:py-4.5 text-2xl leading-6 md:leading-7",
              { "!py-3.5": isLoading }
            )}
            variant={ButtonVariants.SECONDARY}
            isDisabled={!isValid}
            isLoading={isLoading}
          >
            {t(`${T_PREFIX} - ${SEND_BUTTON_NAME}`)}
          </Button>
        </form>
      </FormikProvider>
    </>
  );
};
