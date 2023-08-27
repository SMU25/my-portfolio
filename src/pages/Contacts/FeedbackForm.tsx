import React, { FC, FormEvent, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FormikProvider, useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useModal } from "src/hooks/useModal";
import { sendFeedbackForm } from "src/redux/feedbackForm/action";
import { selectFeedbackFormState } from "src/redux/feedbackForm/selectors";
import { ModalWindow } from "src/components/ModalWindow";
import { Confirmation } from "src/components/ModalWindow/templates/Confirmation";
import { Alert } from "src/components/ModalWindow/templates/Alert";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { RenderFormField } from "src/components/RenderFormField";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { getFormikDefaultInitialValues } from "src/utils/getFormikDefaultInitialValues";
import { IFeedbackFormValues } from "src/types/form";
import { FEEDBACK_FIELDS, FEEDBACK_VALIDATION_SCHEMA } from "./constants";
// import { ReCaptcha } from "src/components/ReCaptcha";

const DEFAULT_BUTTON_CLASSNAME =
  "max-w-none xs:max-w-61.5 w-full text-2xl leading-6 md:leading-7";

const T_PREFIX = "feedback";

const HEADING = "title";
const SEND_BUTTON_NAME = "send-btn";
const CLEAR_BUTTON_NAME = "clear-btn";
const SUCCESSFUL_SEND_FORM_MODAL_TITLE = "successful-send-form-modal-title";
const SUCCESSFUL_SEND_FORM_MODAL_TEXT = "successful-send-form-modal-text";
const ERROR_SEND_FORM_MODAL_TITLE = "error-send-form-modal-title";
const ERROR_SEND_FORM_MODAL_TEXT = "error-send-form-modal-text";
const CLEAR_FORM_MODAL_TITLE = "clear-form-modal-title";
const CLEAR_FORM_MODAL_TEXT = "clear-form-modal-text";

export const FeedbackForm: FC = () => {
  const { t } = useTranslation();

  const sendFormModal = useModal();
  const clearFormModal = useModal();

  const dispatch = useAppDispatch();

  const { isLoading, success } = useAppSelector(selectFeedbackFormState);

  const formikProps = {
    initialValues:
      getFormikDefaultInitialValues<IFeedbackFormValues>(FEEDBACK_FIELDS),
    validationSchema: FEEDBACK_VALIDATION_SCHEMA,
    onSubmit: (values: IFeedbackFormValues) =>
      dispatch(
        sendFeedbackForm({ values, onFinally: sendFormModal.openModal })
      ),
  };

  const formik = useFormik<IFeedbackFormValues>(formikProps);
  const { isValid, submitForm, resetForm } = formik;

  const onSubmitForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      submitForm();
    },
    [submitForm]
  );

  const sendFormModalTitle = success
    ? SUCCESSFUL_SEND_FORM_MODAL_TITLE
    : ERROR_SEND_FORM_MODAL_TITLE;

  const sendFormModalText = success
    ? SUCCESSFUL_SEND_FORM_MODAL_TEXT
    : ERROR_SEND_FORM_MODAL_TEXT;

  return (
    <>
      <ModalWindow
        title={t(`${T_PREFIX} - ${sendFormModalTitle}`)}
        text={t(`${T_PREFIX} - ${sendFormModalText}`)}
        isOpen={sendFormModal.isOpenModal}
        onClose={sendFormModal.closeModal}
        isActivePortal
      >
        {success ? (
          <Confirmation
            onConfirm={resetForm}
            onClose={sendFormModal.closeModal}
          />
        ) : (
          <Alert onClose={sendFormModal.closeModal} />
        )}
      </ModalWindow>
      <ModalWindow
        title={t(`${T_PREFIX} - ${CLEAR_FORM_MODAL_TITLE}`)}
        text={t(`${T_PREFIX} - ${CLEAR_FORM_MODAL_TEXT}`)}
        isOpen={clearFormModal.isOpenModal}
        onClose={clearFormModal.closeModal}
        isActivePortal
      >
        <Confirmation
          onConfirm={resetForm}
          onClose={clearFormModal.closeModal}
        />
      </ModalWindow>
      <Heading
        className="default:text-2xl sm:text-4xl default:font-bold default:max-w-none"
        tagHeading={TagsHeading.H3}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <FormikProvider value={formik}>
        <form>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4.5 sm:gap-y-5.5 md:gap-y-6 gap-x-6 md:gap-x-8 lg:gap-x-13.5 mt-3.5 xs:mt-4 sm:mt-6 md:mt-7.5">
            <RenderFormField fields={FEEDBACK_FIELDS} />
          </div>
          {/* <ReCaptcha className="mt-4.5 xs:mt-6 sm:mt-8 md:mt-10" formik={formik} /> */}
          <div className="flex flex-col xs:flex-row mt-4.5 xs:mt-6 sm:mt-8 md:mt-10">
            <Button
              type="submit"
              className={cn("md:py-4.5", DEFAULT_BUTTON_CLASSNAME, {
                "!py-3.5": isLoading,
              })}
              variant={ButtonVariants.PRIMARY}
              isDisabled={!isValid}
              isLoading={isLoading}
              onClick={onSubmitForm}
            >
              {t(`${T_PREFIX} - ${SEND_BUTTON_NAME}`)}
            </Button>

            <Button
              type="reset"
              className={cn(
                "mt-3.5 xs:mt-0 xs:ml-5 default:py-3 md:py-4",
                DEFAULT_BUTTON_CLASSNAME
              )}
              variant={ButtonVariants.BORDERED_BLACK_DARK}
              onClick={clearFormModal.openModal}
            >
              {t(`${T_PREFIX} - ${CLEAR_BUTTON_NAME}`)}
            </Button>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};
