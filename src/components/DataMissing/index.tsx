import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { history } from "src/services/history";
import { ReactComponent as DataMissingIcon } from "src/assets/icons/data-missing.svg";
// import { Link } from "../Link";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";

const T_PREFIX = "data-missing";

const DATA_MISSING_DEFAULT_TEXT = "default-text";
const TRY_AGAIN_BUTTON_NAME = "try-again-btn";
const PREV_PAGE_BUTTON_NAME = "prev-page-btn";

interface Props {
  dataMissingText?: string;
  fetchMissingData: VoidFunction;
}

export const DataMissing: FC<Props> = ({
  dataMissingText,
  fetchMissingData,
}) => {
  const { t } = useTranslation();

  const onClickPrevPage = () => {
    history.back();
    fetchMissingData();
  };

  const errorText =
    dataMissingText || t(`${T_PREFIX} - ${DATA_MISSING_DEFAULT_TEXT}`);

  return (
    <div className="flex flex-col items-center justify-center mt-5 xs:mt-8 sm:mt-15 py-10 rounded-10 shadow-card-hard-gray">
      <DataMissingIcon className="fill-g-blue-darken w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32" />
      <p className="mt-1 xs:mt-2 sm:mt-5 mb-5 text-center text-xl sm:text-3xl font-medium">
        {errorText}
      </p>
      <div className="flex items-center">
        <Button
          className="default:!py-2.5"
          variant={ButtonVariants.PRIMARY}
          onClick={fetchMissingData}
        >
          {t(`${T_PREFIX} - ${TRY_AGAIN_BUTTON_NAME}`)}
        </Button>
        {/* <Link href=""> */}
        <Button
          className="default:py-2 ml-4"
          variant={ButtonVariants.BORDERED_BLACK_DARK}
          onClick={onClickPrevPage}
        >
          {t(`${T_PREFIX} - ${PREV_PAGE_BUTTON_NAME}`)}
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};
