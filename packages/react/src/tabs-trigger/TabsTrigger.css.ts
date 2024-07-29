import { theme } from "../styles";
import { recipe, style } from "../vanilla-extract";

export const trigger = recipe({
  base: [
    {
      flexDirection: "row",
      gap: "xs",
      py: "10",
    },
    style({
      borderColor: `transparent`,
      color: theme.colors["fg.tertiary"],
      userSelect: "none",

      selectors: {
        "&:focus-visible": {
          outline: `2px solid ${theme.colors["outline.brand"]}`,
          outlineOffset: "1px",
        },
        '&:hover:not([data-state="active"])': {
          borderColor: theme.colors["border.default"],
          color: theme.colors["fg.secondary"],
        },
        "&[data-disabled]": {
          color: theme.colors["fg.disabled"],
        },
        '&[data-orientation="horizontal"]': {
          borderBottomWidth: "2px",
          marginBottom: "-1px",
        },
        '&[data-orientation="vertical"]': {
          borderRightWidth: "2px",
          marginRight: "-1px",
          paddingInline: "10px",
        },
        '&[data-state="active"]': {
          borderColor: theme.colors["border.brand"],
          color: theme.colors["fg.default"],
        },
      },
    }),
  ],
});
