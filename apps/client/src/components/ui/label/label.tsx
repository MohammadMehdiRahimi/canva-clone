import React from "react";
import { LabelProps } from "./label.type";

export const Label: React.FC<LabelProps> = React.memo(
  ({ children, ...rest }) => {
    return <label {...rest}>{children}</label>;
  }
);

Label.displayName = "Label";
