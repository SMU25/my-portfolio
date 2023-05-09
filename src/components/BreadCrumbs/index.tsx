import React, { FC } from "react";
import { useLocation } from "react-router";
import { useAppSelector } from "src/hooks/redux";
import { selectWorkById } from "src/redux/works/selectors";
import { PATHNAMES } from "src/constants/routes";
import { BreadCrumbsItem } from "./BreadCrumbsItem";

export const BreadCrumbs: FC = () => {
  const { pathname } = useLocation();

  // CHANGE , додати стейт в редакс в який буду закидувати останній елемент, і буду обрізати 1 і останній елемент
  const pathnames = pathname
    .split("/")
    .filter((item) => item)
    .map((item) => ({ name: item, link: item }));

  const items = [
    {
      name: "home",
      link: PATHNAMES.HOME,
    },
    ...pathnames,
  ];

  console.log(items);

  //
  const work = useAppSelector(selectWorkById);

  const isHomepage = pathname === PATHNAMES.HOME;

  if (isHomepage) return null;

  return (
    <ul className="flex items-center mt-5 ml-1 sm:ml-13">
      {/* change */}
      {items.map(({ name, link }) => (
        <BreadCrumbsItem link={link}>{name}</BreadCrumbsItem>
      ))}

      {/*  */}
      {/* <BreadCrumbsItem link={PATHNAMES.HOME}>Home</BreadCrumbsItem>
          
      <BreadCrumbsItem link="/">home</BreadCrumbsItem>
      <BreadCrumbsItem link="/" isDisabled>
        home
      </BreadCrumbsItem> */}
    </ul>
  );
};
