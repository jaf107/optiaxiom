import type { ReactNode } from "react";

import type { FlowHeadingElement } from "./types";

import { Heading } from "../heading";

export type FlowHeadingProps = Omit<
  FlowHeadingElement,
  "$type" | "children"
> & {
  /**
   * Heading content
   */
  children: ReactNode;
};

export function FlowHeading({ children, level = 2 }: FlowHeadingProps) {
  return (
    <Heading level={String(level) as "1" | "2" | "3" | "4"}>{children}</Heading>
  );
}

FlowHeading.displayName = "@optiaxiom/react/FlowHeading";
