import { SVGProps, MouseEvent } from "react";

export type IconProps = Omit<SVGProps<SVGElement>, "ref"> & {
  onClick?: (e: MouseEvent<SVGSVGElement, MouseEvent>) => void;
  isSelected?: boolean;
};
