"use client";
import React from "react";
import clsx from "clsx";
import { sizeClasses } from "../utility/string";
import { LoadingProps } from "./loading.type";

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {
  const classes = clsx(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type }
  );
  return <span className={classes}></span>;
};
