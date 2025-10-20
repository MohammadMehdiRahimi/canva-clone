import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  tags: ["autodocs"],
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;
export const InputStory: Story = {
  render: () => {
    return (
      <div>
        <Input />
      </div>
    );
  },
};
