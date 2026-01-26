import type { FlowTextareaElement } from "./types";

import { Textarea } from "../textarea";

export type FlowTextareaProps = Omit<FlowTextareaElement, "$type"> & {
  /**
   * Whether the textarea is disabled
   */
  disabled?: boolean;
  /**
   * Callback when the textarea value changes
   */
  onChange?: (value: string) => void;
};

export function FlowTextarea({
  disabled,
  name,
  onChange,
  placeholder,
  rows,
  value,
}: FlowTextareaProps) {
  return (
    <Textarea
      disabled={disabled}
      id={name}
      name={name}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      value={value || ""}
    />
  );
}

FlowTextarea.displayName = "@optiaxiom/react/FlowTextarea";
