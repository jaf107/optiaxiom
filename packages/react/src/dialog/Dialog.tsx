import * as RadixDialog from "@radix-ui/react-dialog";
import { type ReactNode, forwardRef } from "react";

import { AnimatePresence } from "../animate-presence";
import { Box, type BoxProps } from "../box";
import { Button } from "../button";
import { Paper } from "../paper";
import { Transition } from "../transition";
import { CloseIcon } from "./CloseIcon";
import * as styles from "./Dialog.css";

type DialogProps = BoxProps<
  typeof RadixDialog.Root,
  {
    children: ReactNode;
    modal?: boolean;
    onClose: () => void;
    onOpenChange?: never;
    open?: boolean;
    withCloseButton?: boolean;
  } & styles.DialogVariants
>;

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      children,
      defaultOpen,
      modal,
      onClose,
      open,
      size = "md",
      withCloseButton = false,
      ...props
    },
    ref,
  ) => {
    return (
      <RadixDialog.Root
        defaultOpen={defaultOpen}
        modal={modal}
        onOpenChange={onClose}
        open={open}
      >
        <AnimatePresence>
          {open && (
            <RadixDialog.Portal forceMount>
              <Transition>
                <Box asChild {...styles.overlay()}>
                  <RadixDialog.Overlay />
                </Box>
              </Transition>

              <Transition type="fade-down">
                <Paper asChild {...styles.content({ size })}>
                  <RadixDialog.Content ref={ref} {...props}>
                    {children}

                    {withCloseButton && (
                      <Box asChild {...styles.close()}>
                        <RadixDialog.Close aria-label="Close" asChild>
                          <Button
                            appearance="secondary"
                            icon={<CloseIcon />}
                            size="sm"
                          />
                        </RadixDialog.Close>
                      </Box>
                    )}
                  </RadixDialog.Content>
                </Paper>
              </Transition>
            </RadixDialog.Portal>
          )}
        </AnimatePresence>
      </RadixDialog.Root>
    );
  },
);

Dialog.displayName = "@optiaxiom/react/Dialog";