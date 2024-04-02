import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./utils";

export type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.render();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    for (const key of getKeys(this.config)) {
      const elt = querySelector(`div.command label.${key} span.value`);
      elt.innerHTML = this.config[key] + "";
    }
  }

  setConfig(config: Partial<Config>) {
    this.config = { ...this.config, ...config };
    this.render();
  }
}
