import React, { FC } from "react";
import cn from "classnames";
import { ReactComponent as ListIcon } from "src/assets/list.svg";
import { ReactComponent as GridIcon } from "src/assets/grid.svg";
import { Button } from ".";
import { ButtonVariants } from "./types";
import { ListTypeView } from "src/types";

const ICON_SIZE = 28;

interface Props {
  variant?: ButtonVariants;
  className?: string;
  listTypeView: string;
  toogleListTypeView: VoidFunction;
}

export const ChangeViewButton: FC<Props> = ({
  variant = ButtonVariants.SECONDARY,
  className,
  listTypeView,
  toogleListTypeView,
}) => {
  const Icon = listTypeView === ListTypeView.COLUMN ? ListIcon : GridIcon;

  return (
    <Button
      className={cn(" !p-2 border rounded-10 active:translate-y-0", className)}
      variant={variant}
      onClick={toogleListTypeView}
    >
      <Icon className="transition-all" width={ICON_SIZE} height={ICON_SIZE} />
    </Button>
  );
};
