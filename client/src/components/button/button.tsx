import React, { forwardRef } from "react";
import { ButtonProps } from "./button.types";
import clsx from "clsx";
import { sizeClasses } from "../utility/string";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      isOutline = false,
      isLoading = false,
      loadingText = "در حال ارسال درخواست ..",
      variant = "default",
      size = "normal",
      shape = "default",
      animatedIcon = false,
      ...rest
    },
    ref
  ) => {
    const classNames = clsx(
      "btn",
      {
        [`btn-${sizeClasses[size]}`]: size,
        [`btn-${variant}`]: variant,
        [`btn-${shape}`]: shape,
        "btn-outline": isOutline,
        "animated-icon": animatedIcon,
        "btn-loading": isLoading,
      },
      className
    );
    return (
      <button ref={ref} className={classNames} {...rest}>
        {/* {isLoading} */}
        {isLoading ? <span>{loadingText}</span> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
