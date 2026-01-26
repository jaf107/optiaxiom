import { type ReactNode, useState } from "react";

import type { FlowCancelActionElement } from "./types";

import { Button } from "../button";
import { Flex } from "../flex";
import { Input } from "../input";

export type FlowCancelActionProps = Omit<
  FlowCancelActionElement,
  "$type" | "children"
> & {
  /**
   * Button label content
   */
  children: ReactNode;
  /**
   * Callback when the cancel action is submitted with user input
   */
  onSubmit?: (text: string) => void;
};

export function FlowCancelAction({
  children,
  onSubmit,
}: FlowCancelActionProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="row" gap="8">
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your response..."
          value={inputValue}
        />
        <Button type="submit">{children}</Button>
      </Flex>
    </form>
  );
}

FlowCancelAction.displayName = "@optiaxiom/react/FlowCancelAction";
