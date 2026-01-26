import type { ReactNode } from "react";

import type { FlowGroupElement } from "./types";

import { Flex } from "../flex";

export type FlowGroupProps = Omit<FlowGroupElement, "$type" | "children"> & {
  /**
   * Child elements to render in the group
   */
  children: ReactNode;
};

const gapMap = {
  xs: "4",
  sm: "8",
  md: "16",
  lg: "24",
  xl: "32",
} as const;

export function FlowGroup({
  children,
  flexDirection = "vertical",
  gap = "md",
}: FlowGroupProps) {
  return (
    <Flex
      flexDirection={flexDirection === "vertical" ? "column" : "row"}
      gap={gapMap[gap]}
    >
      {children}
    </Flex>
  );
}

FlowGroup.displayName = "@optiaxiom/react/FlowGroup";
