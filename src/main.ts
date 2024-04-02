import { multiplicationFactor, samples } from "./constants";
import { getAngle, getPointOnCircle } from "./math";
import "./style.css";
import { querySelector } from "./utils";

const sampleGroup = querySelector("svg g.samples");
const lineGroup = querySelector("svg g.lines");

for (let i = 0; i < samples; i++) {
  const angle = getAngle(i, samples);
  const { x, y } = getPointOnCircle(angle);
  const elt = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  elt.setAttribute("r", "1");
  elt.setAttribute("cx", x.toString());
  elt.setAttribute("cy", y + "");

  console.dir(elt);
  sampleGroup.appendChild(elt);
}

for (let i = 0; i < samples; i++) {
  const angle1 = getAngle(i, samples);
  const { x: x1, y: y1 } = getPointOnCircle(angle1);

  const angle2 = multiplicationFactor * angle1;
  const p2 = getPointOnCircle(angle2);

  const elt = document.createElementNS("http://www.w3.org/2000/svg", "line");
  elt.setAttribute("x1", x1 + "");
  elt.setAttribute("y1", y1 + "");
  elt.setAttribute("x2", p2.x + "");
  elt.setAttribute("y2", p2.y + "");

  console.dir(elt);
  lineGroup.appendChild(elt);
}
