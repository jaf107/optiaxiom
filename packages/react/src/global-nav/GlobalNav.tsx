import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { forwardRef, useState } from "react";
import { type ReactNode } from "react";

import { Box, type BoxProps } from "../box";
import { Flex } from "../flex";
import { GlobalNavContext } from "../global-nav-context";
import { extractSprinkles } from "../sprinkles";
import * as styles from "./GlobalNav.css";
type GlobalNavProps = BoxProps<
  "nav",
  {
    endDecorator?: ReactNode;
  }
>;

export const GlobalNav = forwardRef<HTMLElement, GlobalNavProps>(
  ({ children, className, endDecorator, ...props }, ref) => {
    const { restProps, sprinkleProps } = extractSprinkles(props);
    const [open, setOpen] = useState(false);
    // const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

    return (
      <GlobalNavContext.Provider value={{ open }}>
        <RadixCollapsible.Root onOpenChange={() => setOpen(!open)} open={open}>
          <Flex {...styles.wrapper()}>
            <Box asChild {...styles.nav({}, className)} {...sprinkleProps}>
              <nav
                aria-label="Global Navigation"
                ref={ref}
                role="navigation"
                {...restProps}
              >
                {children}
              </nav>
            </Box>
            {endDecorator}
          </Flex>
        </RadixCollapsible.Root>
      </GlobalNavContext.Provider>
    );
  },
);

GlobalNav.displayName = "@optiaxiom/react/GlobalNav";
