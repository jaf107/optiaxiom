import type { FlowInputElement } from "./types";

import { Input } from "../input";

export type FlowInputProps = Omit<FlowInputElement, "$type"> & {
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Callback when the input value changes
   */
  onChange?: (value: string) => void;
};

export function FlowInput({
  disabled,
  name,
  onChange,
  placeholder,
  value,
}: FlowInputProps) {
  return (
    <Input
      disabled={disabled}
      id={name}
      name={name}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      value={value || ""}
    />
  );
}

FlowInput.displayName = "@optiaxiom/react/FlowInput";
