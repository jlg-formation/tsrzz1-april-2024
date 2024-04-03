import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./utils";

export type Callback = (newConfig: Config) => void;

const playBtn = querySelector("div.command div.buttons button[title='Play']");
console.log("playBtn: ", playBtn);

export class Command {
  _config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  callback: Callback = () => {};

  constructor() {
    this.render();
    this.setActions();
  }

  get config() {
    return this._config;
  }

  set config(val: Config) {
    console.log("set config");
    this._config = val;
    this.render();
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

    this.setPlayAction();
  }

  setPlayAction() {
    playBtn.addEventListener("click", () => {
      console.log("play pause");
    });
  }
}
