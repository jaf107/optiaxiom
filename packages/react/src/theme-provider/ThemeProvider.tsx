import { theme, tokens, tokensDark } from "@optiaxiom/globals";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { type ReactNode } from "react";

type ThemeProviderProps = {
  children?: ReactNode;
  selector?: string;
};

export function ThemeProvider({
  children,
  selector = ":root",
}: ThemeProviderProps) {
  return (
    <>
      <style>{`
        ${selector} {
          ${assignInlineVars(theme, tokens)}
        }
      `}</style>
      <style>{`
        ${selector === ":host" ? ":host-context(:root.dark)" : `${selector}.dark`} {
          ${assignInlineVars(theme, tokensDark)}
        }
      `}</style>
      {children}
    </>
  );
}

ThemeProvider.displayName = "@optiaxiom/react/ThemeProvider";
