export const querySelector = (selector: string): HTMLElement => {
  const elt = document.querySelector<HTMLElement>(selector);
  if (elt === null) {
    throw new Error("oups");
  }
  return elt;
};

export const setNbrAttribute = (elt: Element, key: string, value: number) => {
  elt.setAttribute(key, value + "");
};
