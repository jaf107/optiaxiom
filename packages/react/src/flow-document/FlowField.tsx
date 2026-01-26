import type { ReactNode } from "react";

import type { FlowFieldElement } from "./types";

import { Field } from "../field";

export type FlowFieldProps = Omit<FlowFieldElement, "$type" | "children"> & {
  /**
   * Form field child elements (typically Flow.Input or Flow.Textarea)
   */
  children: ReactNode;
  /**
   * ID of the input element within this field (for label association)
   */
  inputId?: string;
};

export function FlowField({
  children,
  description,
  error,
  info,
  inputId,
  label,
  required,
}: FlowFieldProps) {
  return (
    <Field
      description={description}
      error={error}
      info={info}
      inputId={inputId}
      label={label}
      required={required}
    >
      {children}
    </Field>
  );
}

FlowField.displayName = "@optiaxiom/react/FlowField";
