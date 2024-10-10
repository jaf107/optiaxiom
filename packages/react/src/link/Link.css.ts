import { theme } from "../theme";
import { type RecipeVariants, style } from "../vanilla-extract";
import { recipe } from "../vanilla-extract";

export const link = recipe({
  base: [
    style({
      textDecoration: "none",

      selectors: {
        "&:focus-visible": {
          outline: `2px auto ${theme.colors["border.outline"]}`,
          outlineOffset: "1px",
        },
        "&:hover:not([data-disabled])": {
          textDecoration: "underline",
        },
        "&:visited": {
          color: theme.colors["fg.discovery"],
        },
        "&[data-disabled]": {
          color: theme.colors["fg.disabled"],
        },
      },
    }),
  ],
  variants: {
    colorScheme: {
      neutral: style({
        color: theme.colors["fg.default"],
      }),
      primary: style({
        color: theme.colors["fg.accent"],

        selectors: {
          "&:hover:not([data-disabled])": {
            color: theme.colors["fg.accent.hover"],
          },
        },
      }),
      secondary: style({
        color: theme.colors["fg.tertiary"],
      }),
    },
  },
});

export const icon = recipe({
  base: [
    {
      display: "inline-flex",
      ml: "4",
    },
    style({
      height: "auto",
      width: "0.875em",
    }),
  ],
});

export type LinkVariants = RecipeVariants<typeof link>;
