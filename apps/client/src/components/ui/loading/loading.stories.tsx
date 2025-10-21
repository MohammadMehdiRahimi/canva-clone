import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  tags: ["autodocs"],
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const SpinnerLoading: Story = {
  render: () => {
    return (
      <div className="flex gap-3">
        <Loading variant="primary" type="spinner" />
        <Loading variant="accent" type="spinner" />
        <Loading variant="error" type="spinner" />
        <Loading variant="ghost" type="spinner" />
        <Loading variant="info" type="spinner" />
        <Loading variant="neutral" type="spinner" />
        <Loading variant="secondary" type="spinner" />
        <Loading variant="success" type="spinner" />
        <Loading variant="warning" type="spinner" />
      </div>
    );
  },
};
export const RingLoading: Story = {
  render: () => {
    return (
      <div className="flex gap-3">
        <Loading variant="primary" type="ring" />
        <Loading variant="accent" type="ring" />
        <Loading variant="error" type="ring" />
        <Loading variant="ghost" type="ring" />
        <Loading variant="info" type="ring" />
        <Loading variant="neutral" type="ring" />
        <Loading variant="secondary" type="ring" />
        <Loading variant="success" type="ring" />
        <Loading variant="warning" type="ring" />
      </div>
    );
  },
};
