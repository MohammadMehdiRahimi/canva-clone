import { ButtonHTMLAttributes } from "react";
import { LoadingBehavior } from "../types/loading-behavior.types";
import { ComponentBase } from "../types/component-base.type";
import { Shape } from "../types/shape.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    shape?: Shape;
    isOutline?: boolean;
    animatedIcon?: boolean;
  };
