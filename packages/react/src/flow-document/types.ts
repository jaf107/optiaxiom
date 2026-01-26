/**
 * Flow Document JSON schema types
 */

export type FlowActionData = FlowActionElement | FlowCancelActionElement;

export type FlowActionElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Action";
  /**
   * Visual appearance of the action button
   */
  appearance?: "danger" | "default" | "primary" | "subtle";
  /**
   * Button label content
   */
  children: FlowNode;
  /**
   * Unique identifier for this action
   */
  name: string;
};

export type FlowCancelActionElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.CancelAction";
  /**
   * Button label content
   */
  children: FlowNode;
};

export type FlowDocumentElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Document";
  /**
   * Action buttons displayed at the bottom of the document
   */
  actions?: FlowActionData[];
  /**
   * Whether the document blocks the chat prompt (forces interaction)
   */
  blocking?: boolean;
  /**
   * Child elements to render in the document body
   */
  children: FlowNode[];
  /**
   * Flow Document specification version
   */
  version: "1.0";
};

export type FlowDocumentRendererProps = {
  /**
   * The Flow document to render
   */
  element: FlowDocumentElement;
  /**
   * Callback when user clicks a Flow.Action button
   */
  onAction?: (actionName: string) => void;
  /**
   * Callback when user submits the CancelAction input
   */
  onCancelAction?: (prompt: string) => void;
  /**
   * Callback when form fields change
   */
  onValueChange?: (data: Record<string, string>) => void;
  /**
   * Whether form is readonly
   */
  readonly?: boolean;
  /**
   * Current form data (flat object, FormData-like)
   */
  value?: Record<string, string>;
};

export type FlowElement =
  | FlowFieldElement
  | FlowGroupElement
  | FlowHeadingElement
  | FlowInputElement
  | FlowTextareaElement
  | FlowTextElement;

export type FlowFieldElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Field";
  /**
   * Form field child elements
   */
  children: FlowNode;
  /**
   * Help text displayed below the field
   */
  description?: string;
  /**
   * Error message displayed when validation fails
   */
  error?: string;
  /**
   * Info text displayed as a tooltip or help icon
   */
  info?: string;
  /**
   * Label text displayed above the field
   */
  label?: string;
  /**
   * Whether this field is required
   */
  required?: boolean;
};

export type FlowGroupElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Group";
  /**
   * Child elements to render in the group
   */
  children: FlowNode;
  /**
   * Layout direction for child elements
   */
  flexDirection?: "horizontal" | "vertical";
  /**
   * Spacing between child elements
   */
  gap?: "lg" | "md" | "sm" | "xl" | "xs";
};

export type FlowHeadingElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Heading";
  /**
   * Heading content
   */
  children: FlowNode;
  /**
   * Heading level (1-4) that controls semantic tag and font size
   */
  level?: 1 | 2 | 3 | 4;
};

export type FlowInputElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Input";
  /**
   * Unique identifier for this input field
   */
  name: string;
  /**
   * Placeholder text shown when input is empty
   */
  placeholder?: string;
  /**
   * Initial or current value of the input
   */
  value?: string;
};

export type FlowNode = FlowElement | FlowElement[] | string;

export type FlowTextareaElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Textarea";
  /**
   * Unique identifier for this textarea field
   */
  name: string;
  /**
   * Placeholder text shown when textarea is empty
   */
  placeholder?: string;
  /**
   * Number of visible text rows
   */
  rows?: number;
  /**
   * Initial or current value of the textarea
   */
  value?: string;
};

export type FlowTextElement = {
  /**
   * Element type identifier
   */
  $type: "Flow.Text";
  /**
   * Text content
   */
  children: FlowNode;
  /**
   * Text color variant
   */
  color?: "default" | "secondary" | "tertiary";
};
