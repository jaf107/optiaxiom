import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text } from "@optiaxiom/react";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Primitives / Box",
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    background: "brand.50",
    borderRadius: "sm",
    children: <Text>Hello World!</Text>,
    margin: "lg",
    padding: "lg",
  },
};

export const Composition: Story = {
  args: {
    asChild: true,
    background: "orange.50",
    children: <Text>Hello World!</Text>,
    padding: "lg",
  },
};
