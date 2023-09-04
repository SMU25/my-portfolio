import { FC, SVGProps } from "react";

export interface IContactItem {
  id: number;
  title?: string;
  linkLabel?: string;
  link: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  isOpenNewTab?: boolean;
}
