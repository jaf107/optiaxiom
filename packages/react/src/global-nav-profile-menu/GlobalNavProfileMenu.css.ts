import { recipe } from "../vanilla-extract";

export const wrapper = recipe({
  base: {
    alignItems: "center",
    flexDirection: "row",
    gap: "xs",
    px: "md",
    py: "xs",
  },
});

export const picture = recipe({
  base: {
    rounded: "sm",
    size: "md",
  },
});

export const userInfo = recipe({
  base: {
    flex: "1",
    gap: "0",
  },
});
