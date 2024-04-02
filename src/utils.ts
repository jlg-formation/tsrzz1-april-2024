export const querySelector = (selector: string): HTMLElement => {
  const elt = document.querySelector<HTMLElement>(selector);
  if (elt === null) {
    throw new Error("oups");
  }
  return elt;
};
