import type { ReactElement } from "react";

type ToastElement = ReactElement;
type ToastItem = {
  id: string;
  open: boolean;
  toast: ToastElement;
};

const EMPTY: ToastItem[] = [];

let id = 1;
const genId = () => {
  return "t" + id++;
};

export const createToaster = () => {
  let snapshot: ToastItem[] = [];

  const listeners = new Set<() => void>();
  const emit = () => {
    for (const listener of listeners) {
      listener();
    }
  };

  return {
    store: {
      getServerSnapshot: () => EMPTY,
      getSnapshot: () => snapshot,
      subscribe: (callback: () => void) => {
        listeners.add(callback);
        return () => listeners.delete(callback);
      },
    },

    create: (toast: ToastElement) => {
      const id = genId();
      snapshot = [...snapshot, { id, open: true, toast }];

      emit();

      return id;
    },

    remove: (id: string) => {
      snapshot = snapshot.map((item) =>
        item.id === id ? { ...item, open: false } : item,
      );
      emit();

      setTimeout(() => {
        snapshot = snapshot.filter((item) => item.id !== id);
        emit();
      }, 200);
    },
  };
};

export const toaster = createToaster();