import { Board } from "./Board";
import { Command } from "./Command";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = {
  samples: 100,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.render();

const command = new Command();
command.config = config;
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.render();
});

//////////////////////////////////
