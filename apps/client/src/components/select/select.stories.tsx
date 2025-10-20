import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./select";
import { SelectOption } from "./select.types";

const defaultOptions: SelectOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/SelectBase",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The currently selected value",
    },
    options: {
      control: "object",
      description: "Array of { label, value } objects for options",
    },
    onChange: {
      action: "onChange",
      description: "Callback function triggered on value change",
    },
    className: {
      control: "text",
      description: "Optional CSS classes to apply to the select element",
    },
  },
  args: {
    options: defaultOptions,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBehavior: Story = {
  args: {
    // 'value' is not provided, so the component will
    // default to options[0].value ('1')
  },
};

export const Controlled: Story = {
  args: {
    value: "2",
  },
};

export const WithCustomClassName: Story = {
  args: {
    value: "3",
    className: "my-custom-select-class",
  },
};

export const EmptyOptions: Story = {
  args: {
    options: [],
    value: undefined,
  },
};
