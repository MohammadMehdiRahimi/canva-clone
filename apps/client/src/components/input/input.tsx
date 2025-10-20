import { forwardRef } from "react";
import { InputProps } from "./input.types";
import clsx from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...rest }, ref) => {
    const classes = clsx("input", className);
    return <input type={type} ref={ref} {...rest} className={classes} />;
  }
);

Input.displayName = "Input";
