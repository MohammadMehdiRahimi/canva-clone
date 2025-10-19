"use client";
//lib
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ModalCompnentBaseProps,
  ModalContextType,
  ModalType,
} from "./modal.types";
import clsx from "clsx";

/* --------------------------------- context -------------------------------- */
const ModalContext = createContext<ModalContextType | null>(null);
export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal components must be used within <Modal>");
  return ctx;
};

const ModalBase: FC<{ children: ReactNode; open: boolean }> = ({
  children,
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open || false);
  useEffect(() => {
    if (open == true) {
      setIsOpen((prev) => !prev);
    }
  }, [open]);
  const value: ModalContextType = {
    setIsOpen,
    isOpen,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

/* ------------------------------- components ------------------------------- */
const ModalTrigger: React.FC<ModalCompnentBaseProps> = ({
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

const ModalHeader: React.FC<ModalCompnentBaseProps> = ({ children }) => {
  return (
    <div className="">
      <div className=""></div>
      <div className="">{children}</div>
      <div className=""></div>
    </div>
  );
};

const ModalFooter: React.FC<ModalCompnentBaseProps> = ({
  children,
  className,
}) => {
  const classes = clsx(className);
  return <div className={classes}>{children}</div>;
};
const ModalBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="px-6 py-4 text-sm bg-white">{children}</div>;
};

const ModalContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, setIsOpen } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-2xl "
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
            <div
              className={
                "relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg"
              }
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --------------- combine --------------
export const Modal = ModalBase as ModalType;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
