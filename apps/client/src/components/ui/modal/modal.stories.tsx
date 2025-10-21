import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Modal from "./modal";
import { Button } from "../button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;
export const ModalStory: Story = {
  render: () => {
    const [open] = useState(false);
    return (
      <Modal open={open} title="title">
        <Modal.Trigger>
          <Button variant="primary" size="normal">
            click to show modal
          </Button>
        </Modal.Trigger>
        <Modal.Content>
                      <main>this is modal component</main>
                      
                      <div className="">
                          
                      </div>
        </Modal.Content>
      </Modal>
    );
  },
};
