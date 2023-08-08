import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { usePageTitle } from "src/hooks/usePageTitle";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { CONTACTS_ITEMS } from "./constants";
import { ContactItem } from "./ContactItem";

const T_PREFIX = "contacts";

const HEADING = "title";

export const Contacts: FC = () => {
  const { t } = useTranslation();

  const pageTitle = t(`${T_PREFIX} - ${HEADING}`);

  usePageTitle(pageTitle);

  return (
    <>
      <Heading className="default:max-w-none" tagHeading={TagsHeading.H2}>
        {pageTitle}
      </Heading>
      <ul className="grid grid-cols-1 xs:grid-cols-2 gap-y-2 md:gap-y-5 lg:gap-y-6 gap-x-5 mt-2.5 sm:mt-5 lg:mt-6">
        {CONTACTS_ITEMS.map(({ id, ...contact }) => (
          <ContactItem key={id} {...contact} />
        ))}
      </ul>
    </>
  );
};
