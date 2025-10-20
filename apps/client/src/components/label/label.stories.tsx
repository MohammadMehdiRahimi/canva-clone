import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content inside the label tag (the label text)",
    },
    htmlFor: {
      control: "text",
      description: "The ID of the element this label is associated with",
    },
    className: {
      control: "text",
      description: "add tailwind class",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Username",
    htmlFor: "username-input",
  },
};

export const AnotherLabel: Story = {
  args: {
    children: "Password",
    htmlFor: "password-input",
    className: "text-primary font-bold",
  },
};
