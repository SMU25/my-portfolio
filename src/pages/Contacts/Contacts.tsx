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
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CONTACTS_ITEMS.map(({ id, ...contact }) => (
          <ContactItem key={id} {...contact} />
        ))}
      </div>
    </>
  );
};
