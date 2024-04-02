import { Class } from "./interfaces/utility-types";

export const querySelector = <T extends HTMLElement>(
  selector: string,
  type?: Class<T>
): T => {
  const elt = document.querySelector<T>(selector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector = ${selector}`);
  }
  if (type) {
    if (!(elt instanceof type)) {
      throw new Error(`Element ${selector} not instance of ${type.name}`);
    }
  }
  return elt;
};

export const setNbrAttribute = (elt: Element, key: string, value: number) => {
  elt.setAttribute(key, value + "");
};

export const getKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
