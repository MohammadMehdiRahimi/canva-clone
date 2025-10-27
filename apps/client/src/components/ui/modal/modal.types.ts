import { FC, ReactNode } from "react";
import { Size } from "@/components/types/size.type";

type ModalProps = {
  children: ReactNode;
  open?: boolean;
  title?: string | ReactNode;
  size?: Exclude<Size, "xtiny" | "tiny">;
};
type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isFullScreen: boolean;
  setIsFullScreen: (v: boolean) => void;
  title?: string;
  size?: string;
};

type ModalIntersectProps = {
  children?: ReactNode;
  className?: string;
};

type ModalType = FC<ModalProps> & {
  Trigger: FC<ModalIntersectProps>;
  Content: FC<{ children: ReactNode }>;
};

export type { ModalContextType, ModalIntersectProps, ModalType, ModalProps };
