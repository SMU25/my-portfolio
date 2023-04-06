import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TagsHeading } from "src/components/Heading/types";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { CONTACTS_ITEMS } from "./constants";
import { ContactItem } from "./ContactItem";

const T_PREFIX = "contacts";

const HEADING = "title";

export const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerHead
        titleClassName="default:max-w-none"
        title={t(`${T_PREFIX} - ${HEADING}`)}
        tagHeading={TagsHeading.H2}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CONTACTS_ITEMS.map(({ id, ...contact }) => (
          <ContactItem key={id} {...contact} />
        ))}
      </div>
    </>
  );
};
