import type { ReactNode } from "react";

import type { FlowActionElement } from "./types";

import { Button } from "../button";

export type FlowActionProps = Omit<FlowActionElement, "$type" | "children"> & {
  /**
   * Button label content
   */
  children: ReactNode;
  /**
   * Callback when the action button is clicked
   */
  onClick?: () => void;
};

export function FlowAction({
  appearance = "default",
  children,
  name,
  onClick,
}: FlowActionProps) {
  return (
    <Button appearance={appearance} data-action-name={name} onClick={onClick}>
      {children}
    </Button>
  );
}

FlowAction.displayName = "@optiaxiom/react/FlowAction";
