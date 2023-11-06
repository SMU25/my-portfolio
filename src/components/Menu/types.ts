import { FC, SVGProps } from "react";

export interface IMenuItem {
  id: number;
  name: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}
