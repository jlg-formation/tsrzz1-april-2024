import { multiplicationFactorMax, samplesMax, step } from "./constants";
import { Config } from "./interfaces/Config";
import { getKeys, querySelector, random, sleep } from "./utils";

export type Callback = (newConfig: Config) => void;

const playBtn = querySelector("div.command div.buttons button[title='Play']");
const randomBtn = querySelector(
  "div.command div.buttons button[title='Random']",
);

export class Command {
  static readonly iconElt = querySelector(
    "div.command div.buttons button[title='Play'] i",
  );

  #config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  callback: Callback = () => {};
  isPlaying = false;

  constructor() {
    this.render();
    this.setActions();
  }

  get config() {
    return this.#config;
  }

  set config(val: Config) {
    console.log("set config");
    this.#config = val;
    this.render();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  async play() {
    while (this.isPlaying) {
      // play
      // on recupere multiplicationFactor et on l'incremente d'un step tout les x ms.
      // on veille a ce que le render soit fait.

      let mf = this.config.multiplicationFactor;
      mf += step;
      mf %= multiplicationFactorMax;
      mf = +mf.toFixed(2);
      this.config = { ...this.config, multiplicationFactor: mf };
      this.callback(this.config);
      await sleep(1000 / 60);
    }
  }

  render() {
    for (const key of getKeys(this.config)) {
      const elt = querySelector(`div.command label.${key} span.value`);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement,
      );

      sliderElt.value = this.config[key] + "";
    }

    const icon = this.isPlaying ? "pause" : "play";

    Command.iconElt.classList.remove("fa-pause");
    Command.iconElt.classList.remove("fa-play");
    Command.iconElt.classList.add(`fa-${icon}`);
  }

  setActions() {
    for (const key of getKeys(this.config)) {
      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement,
      );
      sliderElt.addEventListener("input", () => {
        this.config = { ...this.config, [key]: +sliderElt.value };
        this.render();
        this.callback(this.config);
      });
    }

    this.setPlayAction();
    this.setRandomConfigAction();
  }

  setPlayAction() {
    playBtn.addEventListener("click", () => {
      console.log("play pause");
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.play();
      }
      this.render();
    });
  }

  setRandomConfigAction() {
    randomBtn.addEventListener("click", () => {
      console.log("get random config");
      const multiplicationFactor = random(0, multiplicationFactorMax);
      const samples = random(0, samplesMax);
      this.config = { multiplicationFactor, samples };
      this.callback(this.config);
    });
  }
}
