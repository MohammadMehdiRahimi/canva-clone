"use client";

import { Sparkling2 } from "@/canvaClone/icons";
// import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import Modal from "../ui/modal/modal";

import DesignList from "./design-list";
import { Design } from "./types";

type DesignModalProps = {
  isOpen: boolean;
  userDesigns: Design[];
  setShowDesignsModal: (t: boolean) => void;
  userDesignsLoading: boolean;
  onClose:()=>void
  
}
function DesignModal({
  isOpen,
  // onClose,
  userDesigns,
  setShowDesignsModal,
  userDesignsLoading,
}: DesignModalProps) {
  return (
    <Modal
      open={isOpen}
      title={
        <>
          <Sparkling2 className="h-6 w-6 text-yellow-500 mr-2" />
          All Designs
        </>
      }
      //     onOpenChange={onClose}
    >
      <div className="flex flex-col">
        <DesignList
          setShowDesignsModal={setShowDesignsModal}
          isModalView={true}
          listOfDesigns={userDesigns}
          isLoading={userDesignsLoading}
        />
      </div>
    </Modal>
  );
}

export default DesignModal;
