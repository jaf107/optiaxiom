import type { AppProps } from "next/app";

import { Suspense, lazy, useEffect } from "react";

import "./globals.css";

const AxiomProvider = lazy(async () => ({
  default: (await import("@optiaxiom/react")).AxiomProvider,
}));

export default function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Manually remove background-color rule from top navbar nextra theme.
   * For some reason css isn't able to override the color.
   */
  useEffect(() => {
    for (const sheet of document.styleSheets) {
      for (const layerRule of sheet.cssRules) {
        if (
          layerRule instanceof CSSLayerBlockRule &&
          layerRule.name === "optiaxiom.base"
        ) {
          for (const supportsRule of layerRule.cssRules) {
            if (supportsRule instanceof CSSSupportsRule) {
              for (const [index, cssRule] of Object.entries(
                supportsRule.cssRules,
              )) {
                if (
                  cssRule instanceof CSSStyleRule &&
                  cssRule.selectorText.includes(".nextra-nav-container-blur") &&
                  cssRule.selectorText.includes("dark")
                ) {
                  supportsRule.deleteRule(index as unknown as number);
                }
              }
            }
          }
        }
      }
    }
  }, []);

  return (
    <Suspense>
      <AxiomProvider>
        <Component {...pageProps} />
      </AxiomProvider>
    </Suspense>
  );
}
