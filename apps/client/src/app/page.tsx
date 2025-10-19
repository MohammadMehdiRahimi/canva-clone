"use client";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { Icons8Multiply } from "@/canvaClone/icons";
import React from "react";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Modal open={open}>
        <div>
          <Modal.Trigger>
            <Button variant="primary">click to open modal</Button>
            <Icons8Multiply />
          </Modal.Trigger>
        </div>

        <Modal.Content>
          <Modal.Header>Deactivate account</Modal.Header>
          <Modal.Body>
            Are you sure you want to deactivate your account? This action cannot
            be undone.
          </Modal.Body>
          <Modal.Footer>
            <button className="rounded-md px-3 py-2 text-sm text-white ">
              Deactivate
            </button>
            <button
              className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
              onClick={() => setOpen((prev) => !prev)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal open={open2}>
        <div>
          <Modal.Trigger>
            <Button variant="primary">click to open modal</Button>
          </Modal.Trigger>
        </div>

        <Modal.Content>
          <Modal.Header>Deactivate account</Modal.Header>
          <Modal.Body>
            Are you sure you want to deactivate your account? This action cannot
            be undone.
          </Modal.Body>
          <Modal.Footer>
            <button
              className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
              onClick={() => setOpen2((prev) => !prev)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
