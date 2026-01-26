import { Fragment, type ReactNode } from "react";

import type {
  FlowActionData,
  FlowDocumentRendererProps,
  FlowElement,
  FlowNode,
} from "./types";

import { Card } from "../card";
import { Flex } from "../flex";
import { FlowAction } from "./FlowAction";
import { FlowCancelAction } from "./FlowCancelAction";
import { FlowField } from "./FlowField";
import { FlowGroup } from "./FlowGroup";
import { FlowHeading } from "./FlowHeading";
import { FlowInput } from "./FlowInput";
import { FlowText } from "./FlowText";
import { FlowTextarea } from "./FlowTextarea";

export function FlowDocumentRenderer({
  element,
  onAction,
  onCancelAction,
  onValueChange,
  readonly = false,
  value = {},
}: FlowDocumentRendererProps) {
  if (!element || element.$type !== "Flow.Document") {
    console.error("Invalid Flow document:", element);
    return null;
  }

  const handleValueChange = (name: string, newValue: string) => {
    onValueChange?.({ ...value, [name]: newValue });
  };

  const handleAction = (actionName: string) => {
    onAction?.(actionName);
  };

  const handleCancelAction = (text: string) => {
    onCancelAction?.(text);
  };

  const renderChildren = (children: FlowNode): ReactNode => {
    if (typeof children === "string") {
      return children;
    }

    if (Array.isArray(children)) {
      return <>{children.map((child, i) => renderNode(child, i))}</>;
    }

    return renderNode(children, 0);
  };

  const renderNode = (node: FlowNode, index: number): ReactNode => {
    if (typeof node === "string") {
      return <Fragment key={index}>{node}</Fragment>;
    }

    if (Array.isArray(node)) {
      return (
        <Fragment key={index}>
          {node.map((item, i) => renderNode(item, i))}
        </Fragment>
      );
    }

    return renderElement(node, index);
  };

  const renderElement = (el: FlowElement, index: number): ReactNode => {
    if (!el || !el.$type) {
      console.error(`Invalid Flow element at index ${index}:`, el);
      return null;
    }

    const key = `${el.$type}-${index}`;

    switch (el.$type) {
      case "Flow.Field": {
        let inputId: string | undefined;
        const children = Array.isArray(el.children)
          ? el.children
          : [el.children];
        for (const child of children) {
          if (typeof child === "object" && !Array.isArray(child)) {
            if (
              child.$type === "Flow.Input" ||
              child.$type === "Flow.Textarea"
            ) {
              inputId = child.name;
              break;
            }
          }
        }

        return (
          <FlowField
            description={el.description}
            error={el.error}
            info={el.info}
            inputId={inputId}
            key={key}
            label={el.label}
            required={el.required}
          >
            {renderChildren(el.children)}
          </FlowField>
        );
      }

      case "Flow.Group":
        return (
          <FlowGroup flexDirection={el.flexDirection} gap={el.gap} key={key}>
            {renderChildren(el.children)}
          </FlowGroup>
        );

      case "Flow.Heading":
        return (
          <FlowHeading key={key} level={el.level}>
            {renderChildren(el.children)}
          </FlowHeading>
        );

      case "Flow.Input":
        return (
          <FlowInput
            disabled={readonly}
            key={key}
            name={el.name}
            onChange={(newValue) => handleValueChange(el.name, newValue)}
            placeholder={el.placeholder}
            value={value[el.name] || el.value || ""}
          />
        );

      case "Flow.Text":
        return (
          <FlowText color={el.color} key={key}>
            {renderChildren(el.children)}
          </FlowText>
        );

      case "Flow.Textarea":
        return (
          <FlowTextarea
            disabled={readonly}
            key={key}
            name={el.name}
            onChange={(newValue) => handleValueChange(el.name, newValue)}
            placeholder={el.placeholder}
            rows={el.rows}
            value={value[el.name] || el.value || ""}
          />
        );

      default:
        console.error(`Unknown Flow element type at index ${index}`);
        return null;
    }
  };

  const renderActions = (actions: FlowActionData[] | undefined) => {
    if (!actions || actions.length === 0) return null;
    if (readonly) return null;

    const hasCancelActionOnly =
      actions.length === 1 && actions[0].$type === "Flow.CancelAction";

    // Auto-inject default submit action if only CancelAction exists
    const actionsToRender = hasCancelActionOnly
      ? [
          {
            $type: "Flow.Action" as const,
            appearance: "primary" as const,
            children: "Submit",
            name: "submit",
          },
          ...actions,
        ]
      : actions;

    return (
      <Flex flexDirection="row" gap="8">
        {actionsToRender.map((action, index) => {
          if (action.$type === "Flow.Action") {
            return (
              <FlowAction
                appearance={action.appearance}
                key={`action-${index}`}
                name={action.name}
                onClick={() => handleAction(action.name)}
              >
                {renderChildren(action.children)}
              </FlowAction>
            );
          }

          return (
            <FlowCancelAction
              key={`cancel-action-${index}`}
              onSubmit={handleCancelAction}
            >
              {renderChildren(action.children)}
            </FlowCancelAction>
          );
        })}
      </Flex>
    );
  };

  return (
    <Card>
      {element.children.map((child, index) => renderNode(child, index))}
      {renderActions(element.actions)}
    </Card>
  );
}

FlowDocumentRenderer.displayName = "@optiaxiom/react/FlowDocumentRenderer";
