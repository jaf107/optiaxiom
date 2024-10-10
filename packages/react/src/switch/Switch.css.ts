import * as styles from "../control-base/ControlBase.css";
import { theme } from "../theme";
import { recipe, type RecipeVariants, style } from "../vanilla-extract";

const marker = style({});

export const container = recipe({
  base: style({
    vars: {
      [styles.controlColorVar]: theme.colors["bg.neutral.strong"],
    },

    selectors: {
      [`&:has(${marker}:not([data-disabled])[data-state="unchecked"]):hover`]: {
        vars: {
          [styles.controlColorVar]: theme.colors["bg.neutral.strong.hovered"],
        },
      },
    },
  }),
});

export const root = recipe({
  base: [
    marker,
    {
      px: "12",
      py: "2",
      rounded: "full",
      transition: "colors",
    },
    style({
      backgroundColor: styles.controlColorVar,
      position: "relative",
    }),
  ],
});

export const thumb = recipe({
  base: [
    {
      display: "block",
      rounded: "full",
      transition: "transform",
    },
    style({
      backgroundColor: theme.colors["neutral.00"],
      transform: "translateX(-10px)",

      selectors: {
        "&:not([data-disabled])": {
          boxShadow: theme.boxShadow["sm"],
        },
        "&[data-disabled]": {
          backgroundColor: theme.colors["neutral.50"],
        },
        '&[data-state="checked"]': {
          transform: "translateX(10px)",
        },
      },
    }),
  ],
  variants: {
    size: {
      md: {
        size: "16",
      },
      lg: {
        size: "20",
      },
    },
  },
});

export type SwitchVariants = RecipeVariants<typeof thumb>;
