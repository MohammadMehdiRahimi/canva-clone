"use client";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { useState } from "react";

import React from "react";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-primary"></div>
      <Modal open={open} title="this is test" size={"xlarge"}>
        <div>
          <Modal.Trigger>
            <Button variant="primary">click to open modal</Button>
          </Modal.Trigger>
        </div>

        <Modal.Content>
          Are you sure you want to deactivate your account? This action cannot
          be undone.
          <button className="rounded-md px-3 py-2 text-sm text-white ">
            Deactivate
          </button>
          <button
            className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
            onClick={() => setOpen((prev) => !prev)}
          >
            Cancel
          </button>
        </Modal.Content>
      </Modal>
    </>
  );
}
