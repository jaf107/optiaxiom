import type { ReactNode } from "react";

import { useAutocompleteContext } from "../autocomplete-context";
import { AutocompleteListContextProvider } from "../autocomplete-list-context";

type AutocompleteListProps = {
  /**
   * Render each item using a children render prop.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (item: any) => ReactNode;
};

export function AutocompleteList({ children }: AutocompleteListProps) {
  const { downshift, items, itemToKey } =
    useAutocompleteContext("AutocompleteList");

  return (
    <>
      {items.map((item) => (
        <AutocompleteListContextProvider
          active={downshift.selectedItem === item}
          item={item}
          key={itemToKey(item)}
        >
          {children(item)}
        </AutocompleteListContextProvider>
      ))}
    </>
  );
}

AutocompleteList.displayName = "@optiaxiom/react/AutocompleteList";
