import { Size } from "./size.type";
import { Variants } from "./variant.type";

export type ComponentBase = {
  size?: Size;
  variant?: Variants;
  className?: string;
};
