import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";

import { Box } from "../box";
import { extractSprinkles } from "../sprinkles";
import { type ExtendProps } from "../utils";
import * as styles from "./InputBase.css";

type InputBaseProps = ExtendProps<
  ComponentPropsWithRef<"input">,
  ComponentPropsWithRef<typeof Box>,
  {
    disabled?: boolean;
    endDecorator?: ReactNode;
    error?: boolean;
    startDecorator?: ReactNode;
  } & styles.InputVariants
>;

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      asChild,
      className,
      disabled,
      endDecorator,
      error,
      id,
      size = "md",
      startDecorator,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "input";
    const { restProps, sprinkleProps } = extractSprinkles(props);

    return (
      <Box
        aria-disabled={disabled}
        aria-invalid={error}
        data-disabled={disabled}
        data-invalid={error}
        {...styles.wrapper({}, className)}
        {...sprinkleProps}
      >
        {startDecorator}

        <Box asChild {...styles.input({ size })}>
          <Comp id={id} readOnly={disabled} ref={ref} {...restProps} />
        </Box>

        {endDecorator}
      </Box>
    );
  },
);

InputBase.displayName = "@optiaxiom/react/InputBase";