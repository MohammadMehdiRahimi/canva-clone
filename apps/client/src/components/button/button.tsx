import React, { forwardRef } from "react";
import { ButtonProps } from "./button.types";
import clsx from "clsx";
import { sizeClasses } from "../utility/string";
import { Loading } from "../loading";
import { Variants } from "../types/variant.type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      isOutline = false,
      isLoading = false,
      loadingText = "fetch data ...",
      variant = "default",
      size = "normal",
      shape = "default",
      animatedIcon = false,
      disabled,
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
    const loaderVarient: Exclude<Variants, "link"> =
      variant === "link" ? "primary" : variant;
    return (
      <button
        ref={ref}
        className={classNames}
        {...rest}
        disabled={isLoading || disabled}
      >
        {isLoading && <Loading type="spinner" variant={loaderVarient} />}
        {isLoading ? <span>{loadingText}</span> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
