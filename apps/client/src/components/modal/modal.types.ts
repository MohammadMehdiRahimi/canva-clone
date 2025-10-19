import { FC, ReactNode } from "react";
type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};
type ModalCompnentBaseProps = {
  children?: ReactNode;
  className?: string;
};

type ModalHeaderProps = ModalCompnentBaseProps & {
  title?: string;
};
type ModalType = FC<{ children: ReactNode; open?: boolean }> & {
  Trigger: FC<ModalCompnentBaseProps>;
  Header: FC<ModalCompnentBaseProps>;
  Content: FC<{ children: ReactNode }>;
  Footer: FC<ModalCompnentBaseProps>;
  Body: FC<{ children: ReactNode }>;
};

export type {
  ModalContextType,
  ModalCompnentBaseProps,
  ModalHeaderProps,
  ModalType,
};
