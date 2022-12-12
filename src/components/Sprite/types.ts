import { FC, SVGProps } from "react";

export interface ISpriteItem {
  id: number;
  name?: string;
  link: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}
