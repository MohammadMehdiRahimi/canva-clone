import { ReactNode } from "react";

export type SelectOption = {
  label: string | ReactNode;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  className?: string;
  value?: string;
  onChange: (value: string) => void;
};
