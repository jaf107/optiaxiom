/* eslint-disable no-console, @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { FlowDocumentRenderer } from "@optiaxiom/react/unstable";

export default {
  component: FlowDocumentRenderer,
  parameters: {
    layout: "padded",
  },
} as Meta<typeof FlowDocumentRenderer>;

type Story = StoryObj<typeof FlowDocumentRenderer>;

export const Basic: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      children: [
        {
          $type: "Flow.Heading",
          children: "Welcome to Flow Documents",
          level: 2,
        },
        {
          $type: "Flow.Text",
          children:
            "This is a basic Flow Document that demonstrates rendering elements from JSON.",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const FormWithInputs: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Create Test Plan",
          name: "submit",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Create Test Plan",
          level: 2,
        },
        {
          $type: "Flow.Field",
          children: {
            $type: "Flow.Input",
            name: "url",
            placeholder: "https://example.com",
          },
          label: "URL",
          required: true,
        },
        {
          $type: "Flow.Field",
          children: {
            $type: "Flow.Textarea",
            name: "test_idea",
            placeholder: "Enter test description...",
            rows: 4,
          },
          description: "Describe what you want to test",
          label: "Test Idea",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const WithGroups: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      children: [
        {
          $type: "Flow.Heading",
          children: "Layout with Groups",
          level: 2,
        },
        {
          $type: "Flow.Group",
          children: [
            {
              $type: "Flow.Text",
              children: "This is a vertical group with medium spacing",
              color: "secondary",
            },
            {
              $type: "Flow.Text",
              children: "Items stack vertically",
            },
          ],
          flexDirection: "vertical",
          gap: "md",
        },
        {
          $type: "Flow.Group",
          children: [
            {
              $type: "Flow.Text",
              children: "Horizontal",
            },
            {
              $type: "Flow.Text",
              children: "layout",
              color: "tertiary",
            },
            {
              $type: "Flow.Text",
              children: "with small gap",
            },
          ],
          flexDirection: "horizontal",
          gap: "sm",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const WithActions: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Submit",
          name: "submit",
        },
        {
          $type: "Flow.Action",
          appearance: "subtle",
          children: "Cancel",
          name: "cancel",
        },
        {
          $type: "Flow.Action",
          appearance: "danger",
          children: "Delete",
          name: "delete",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Document with Actions",
          level: 2,
        },
        {
          $type: "Flow.Text",
          children: "This document demonstrates different action types.",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action clicked:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const WithCancelAction: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Approve",
          name: "approve",
        },
        {
          $type: "Flow.CancelAction",
          children: "Reject",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Approve Changes",
          level: 2,
        },
        {
          $type: "Flow.Text",
          children: "Would you like to approve the proposed changes?",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onCancelAction: (text: string) => console.log("Cancel with text:", text),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const CancelActionOnly: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.CancelAction",
          children: "Cancel",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Cancel Action Auto-Injection",
          level: 3,
        },
        {
          $type: "Flow.Text",
          children:
            "When only CancelAction is present, a default Submit button is automatically injected.",
          color: "secondary",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onCancelAction: (text: string) => console.log("Cancel with text:", text),
  },
};

export const ReadonlyMode: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Submit",
          name: "submit",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Readonly Document",
          level: 2,
        },
        {
          $type: "Flow.Field",
          children: {
            $type: "Flow.Input",
            name: "name",
            value: "John Doe",
          },
          label: "Name",
        },
        {
          $type: "Flow.Field",
          children: {
            $type: "Flow.Textarea",
            name: "message",
            value: "This form is readonly",
          },
          label: "Message",
        },
      ],
      version: "1.0",
    },
    readonly: true,
    value: { message: "This form is readonly", name: "John Doe" },
  },
};

export const BlockingDocument: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Confirm",
          name: "confirm",
        },
        {
          $type: "Flow.Action",
          appearance: "subtle",
          children: "Cancel",
          name: "cancel",
        },
      ],
      blocking: true,
      children: [
        {
          $type: "Flow.Heading",
          children: "Blocking Document",
          level: 2,
        },
        {
          $type: "Flow.Text",
          children:
            "This is a blocking document. When rendered in the chat, it will hide the main prompt.",
          color: "secondary",
        },
        {
          $type: "Flow.Field",
          children: {
            $type: "Flow.Input",
            name: "reason",
            placeholder: "Enter reason...",
          },
          label: "Reason",
          required: true,
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};

export const ComplexForm: Story = {
  args: {
    element: {
      $type: "Flow.Document",
      actions: [
        {
          $type: "Flow.Action",
          appearance: "primary",
          children: "Create Test Plan",
          name: "create",
        },
        {
          $type: "Flow.Action",
          appearance: "subtle",
          children: "Save as Draft",
          name: "save_draft",
        },
      ],
      children: [
        {
          $type: "Flow.Heading",
          children: "Test Plan Creation",
          level: 1,
        },
        {
          $type: "Flow.Group",
          children: [
            {
              $type: "Flow.Heading",
              children: "Basic Information",
              level: 3,
            },
            {
              $type: "Flow.Field",
              children: {
                $type: "Flow.Input",
                name: "url",
                placeholder: "https://example.com",
              },
              description: "The URL of the page to test",
              label: "Test URL",
              required: true,
            },
            {
              $type: "Flow.Field",
              children: {
                $type: "Flow.Textarea",
                name: "description",
                placeholder: "Enter test description...",
                rows: 3,
              },
              info: "Describe what functionality you want to test",
              label: "Test Description",
            },
            {
              $type: "Flow.Heading",
              children: "Additional Details",
              level: 3,
            },
            {
              $type: "Flow.Field",
              children: {
                $type: "Flow.Textarea",
                name: "expected",
                placeholder: "What should happen?",
                rows: 2,
              },
              label: "Expected Behavior",
            },
          ],
          flexDirection: "vertical",
          gap: "lg",
        },
      ],
      version: "1.0",
    },
    onAction: (name: string) => console.log("Action:", name),
    onValueChange: (data: Record<string, any>) =>
      console.log("Form data:", data),
  },
};
