import React, { FC, FormEvent, useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FormikProvider, useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { sendFeedbackForm } from "src/redux/feedbackForm/action";
import { selectFeedbackFormState } from "src/redux/feedbackForm/selectors";
import { ModalWindow } from "src/components/ModalWindow";
import { Confirmation } from "src/components/ModalWindow/templates/Confirmation";
import { Alert } from "src/components/ModalWindow/templates/Alert";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { RenderFormField } from "src/components/RenderFormField";
import { Textarea } from "src/components/FormField/Textarea";
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
const MESSAGE_FIELD_NAME = "message";
const SEND_BUTTON_NAME = "send-btn";
const CLEAR_BUTTON_NAME = "clear-btn";

export const FeedbackForm: FC = () => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const dispatch = useAppDispatch();

  const { isLoading, success } = useAppSelector(selectFeedbackFormState);

  const formikProps = {
    initialValues: getFormikDefaultInitialValues<IFeedbackFormValues>(
      FEEDBACK_FIELDS,
      MESSAGE_FIELD_NAME
    ),
    validationSchema: FEEDBACK_VALIDATION_SCHEMA,
    onSubmit: (values: IFeedbackFormValues) =>
      dispatch(sendFeedbackForm(values)),
  };

  const formik = useFormik<IFeedbackFormValues>(formikProps);
  const { isValid, submitForm, resetForm } = formik;

  const showClearFormModal = useCallback(() => {
    showModal();

    // showSharedModal({
    //   title: "Ваше повідомлення успішно досталено!" || "Очищення форми",
    //   text: "Очистити форму ?" || "Ві дійсно хочете очистити форму ?",
    //   confirmation: {
    //     onConfirm: resetForm,
    //   },
    // }),
  }, [resetForm]);

  const showErrorModal = useCallback(() => {
    showModal();

    // showSharedModal({
    //   title: "Сталася помилка при відправці повідомлення!",
    //   text: "Повторіть спробу знову.",
    //   alert: {},
    // })
  }, []);

  const onSubmitForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      submitForm();
    },
    [submitForm]
  );

  useEffect(() => {
    if (success) {
      showClearFormModal();
    } else if (success !== null) {
      showErrorModal();
    }
  }, [showClearFormModal, showErrorModal, success]);

  return (
    <>
      <ModalWindow isOpen={isOpenModal} onClose={closeModal} isActivePortal>
        <Confirmation onConfirm={showModal} onClose={closeModal}></Confirmation>
        {/* <Alert onClose={closeModal}/> */}
      </ModalWindow>
      <Heading
        className="default:text-2xl sm:text-4xl font-extrabold default:max-w-none"
        tagHeading={TagsHeading.H3}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <FormikProvider value={formik}>
        <form>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4.5 sm:gap-y-5.5 md:gap-y-6 gap-x-6 md:gap-x-8 lg:gap-x-13.5 mt-3.5 xs:mt-4 sm:mt-6 md:mt-7.5">
            <RenderFormField fields={FEEDBACK_FIELDS} />
          </div>
          <Textarea
            containerClassName="mt-6 sm:mt-7 md:mt-7.5"
            name={MESSAGE_FIELD_NAME}
            label={MESSAGE_FIELD_NAME}
          />
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
              onClick={showClearFormModal}
            >
              {t(`${T_PREFIX} - ${CLEAR_BUTTON_NAME}`)}
            </Button>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};
