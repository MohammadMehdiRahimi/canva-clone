import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </div>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button isOutline variant="neutral">
        Neutral
      </Button>
      <Button isOutline variant="primary">
        Primary
      </Button>
      <Button isOutline variant="secondary">
        Secondary
      </Button>
      <Button isOutline variant="accent">
        Accent
      </Button>
      <Button isOutline variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};

export const OutlineStateButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button isOutline variant="success">
        Success
      </Button>
      <Button isOutline variant="info">
        Info
      </Button>
      <Button isOutline variant="warning">
        Warning
      </Button>
      <Button isOutline variant="error">
        Error
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" size="tiny">
        Tiny
      </Button>
      <Button variant="neutral" size="small">
        Small
      </Button>
      <Button variant="neutral" size="normal">
        Normal
      </Button>
      <Button variant="neutral" size="large">
        Large
      </Button>
    </div>
  ),
};

export const WideButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" shape="wide">
        Wide Button
      </Button>
    </div>
  ),
};

export const FullButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" shape="full">
        Full Button
      </Button>
    </div>
  ),
};

export const SqureButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" size="tiny" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button variant="neutral" size="small" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button variant="neutral" size="normal" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button variant="neutral" size="large" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
    </div>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" disabled>
        Disabled Button
      </Button>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    size: "tiny",
  },
};
export const IconButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button variant="error" animatedIcon={true}>
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </div>
  ),
};

export const ButtonWithLoading: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="neutral" isLoading={true} loadingText="Loading"></Button>
      <Button
        variant="neutral"
        isLoading={true}
        loaderVariant={"ring"}
        loadingText="Loading"
      ></Button>
      <Button variant="primary" isLoading={true} loadingText="Loading"></Button>
      <Button
        variant="accent"
        isOutline
        isLoading={true}
        loaderVariant={"ring"}
        loadingText="Loading"
      ></Button>
    </div>
  ),
};
