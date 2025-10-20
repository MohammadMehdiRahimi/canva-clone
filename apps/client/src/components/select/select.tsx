"use client";
import clsx from "clsx";
import { SelectProps } from "./select.types";

export const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  options,
  className,
}) => {
  const classes = clsx("select", className);
  console.log("helo");
  return (
    <select
      value={value ?? options[0].value}
      onChange={(e) => onChange(e.target.value)}
      className={classes}
    >
      {options.map((o, idx) => (
        <option key={`select-options-${o.value}-${idx}`} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};
