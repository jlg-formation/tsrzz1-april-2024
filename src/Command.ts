import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./utils";

export type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  _config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  set config(val: Config) {
    console.log("set config");
    this._config = val;
    this.render();
  }

  get config() {
    return this._config;
  }

  constructor() {
    this.render();
    this.setActions();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    for (const key of getKeys(this.config)) {
      const elt = querySelector(`div.command label.${key} span.value`);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );

      sliderElt.value = this.config[key] + "";
    }
  }

  setActions() {
    for (const key of getKeys(this.config)) {
      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      sliderElt.addEventListener("input", () => {
        this.config = { ...this.config, [key]: +sliderElt.value };
        this.render();
        this.callback(this.config);
      });
    }
  }
}
