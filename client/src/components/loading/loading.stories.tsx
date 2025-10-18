import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  tags: ["autodocs"],
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const LoadingState: Story = {
  render: () => {
    return <></>;
  },
};
