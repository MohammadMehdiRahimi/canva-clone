import { ComponentBase } from "../types/component-base.type";
import { Variants } from "../types/variant.type";

export type LoadingProps = Omit<ComponentBase, "variant"> & {
  variant?: Exclude<Variants, "link">;
  type?: "spinner" | "ring";
};
