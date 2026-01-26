import type { ReactNode } from "react";

import type { FlowTextElement } from "./types";

import { Text } from "../text";

export type FlowTextProps = Omit<FlowTextElement, "$type" | "children"> & {
  /**
   * Text content
   */
  children: ReactNode;
};

const colorMap = {
  default: "fg.default",
  secondary: "fg.secondary",
  tertiary: "fg.tertiary",
} as const;

export function FlowText({ children, color = "default" }: FlowTextProps) {
  return <Text color={colorMap[color]}>{children}</Text>;
}

FlowText.displayName = "@optiaxiom/react/FlowText";
