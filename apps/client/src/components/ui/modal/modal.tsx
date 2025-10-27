"use client";
//lib
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// components
import { Close7, FullScreen } from "@/canvaClone/icons";
import { Button } from "../button";

//types
import {
  ModalIntersectProps,
  ModalContextType,
  ModalProps,
  ModalType,
} from "./modal.types";

/* --------------------------------- context -------------------------------- */
const ModalContext = createContext<ModalContextType | null>(null);
export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal components must be used within <Modal>");
  return ctx;
};

const ModalBase: FC<ModalProps> = ({ children, open = false, title, size }) => {
  type ModalSizeKey = NonNullable<ModalProps["size"]>;

  const setSize: Record<ModalSizeKey, string> = {
    small: "max-w-xs",
    normal: "max-w-sm",
    large: "max-w-md",
    xlarge: "max-w-2xl",
  };

  const [isOpen, setIsOpen] = useState<boolean>(open || false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  useEffect(() => {
    if (open == true) {
      setIsOpen((prev) => !prev);
    }
  }, [open]);
  const value: ModalContextType = {
    setIsOpen,
    isOpen,
    title,
    size: size ? setSize[size] : "max-w-lg",
    isFullScreen,
    setIsFullScreen,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

/* ------------------------------- components ------------------------------- */
const ModalTrigger: React.FC<ModalIntersectProps> = ({
  children,
  className,
}) => {
  const { setIsOpen } = useModal();
  return (
    <div onClick={() => setIsOpen(true)} className={className}>
      {children}
    </div>
  );
};

const ModalHeader: React.FC<ModalIntersectProps> = ({ className }) => {
  const { title, setIsOpen, setIsFullScreen, isFullScreen } = useModal();
  if (!title) return;

  return (
    <div className={` p-1 px-3 flex justify-between max-w-2x ${className}`}>
      <div className="">{title}</div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(false)}
        >
          <Close7 size={10} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          <FullScreen size={10} />
        </Button>
      </div>
    </div>
  );
};

const ModalContent: React.FC<ModalIntersectProps> = ({
  children,
  className,
}) => {
  const { isOpen, setIsOpen, size, isFullScreen } = useModal();
  const classes = clsx(
    "relative w-full  overflow-hidden rounded-lg shadow-lg bg-white",
    size,
    isFullScreen && "min-h-screen min-w-screen",
    className
  );
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <motion.div
            className="fixed inset-0 flex items-center  justify-center rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className={classes}>
              <ModalHeader />
              <div className="p-2">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --------------- combine --------------
const Modal = ModalBase as ModalType;
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

export default Modal;
