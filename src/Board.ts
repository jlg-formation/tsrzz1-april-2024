import { SVG_NS } from "./constants";
import { Config } from "./interfaces/Config";
import { getAngle, getPointOnCircle } from "./math";
import { querySelector, setNbrAttribute } from "./utils";

const sampleGroup = querySelector("svg g.samples");
const lineGroup = querySelector("svg g.lines");

export class Board {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  clean() {
    sampleGroup.innerHTML = "";
    lineGroup.innerHTML = "";
  }

  render() {
    const { samples, multiplicationFactor } = this.config;

    this.clean();

    for (let i = 0; i < samples; i++) {
      const angle = getAngle(i, samples);
      const { x, y } = getPointOnCircle(angle);
      const elt = document.createElementNS(SVG_NS, "circle");
      setNbrAttribute(elt, "r", 1);
      setNbrAttribute(elt, "cx", x);
      setNbrAttribute(elt, "cy", y);

      console.dir(elt);
      sampleGroup.appendChild(elt);
    }

    for (let i = 0; i < samples; i++) {
      const angle1 = getAngle(i, samples);
      const { x: x1, y: y1 } = getPointOnCircle(angle1);

      const angle2 = getAngle(i * multiplicationFactor, samples);
      const p2 = getPointOnCircle(angle2);

      const elt = document.createElementNS(SVG_NS, "line");
      setNbrAttribute(elt, "x1", x1);
      setNbrAttribute(elt, "y1", y1);
      setNbrAttribute(elt, "x2", p2.x);
      setNbrAttribute(elt, "y2", p2.y);

      console.dir(elt);
      lineGroup.appendChild(elt);
    }
  }

  setConfig(config: Partial<Config>) {
    this.config = { ...this.config, ...config };
  }
}
