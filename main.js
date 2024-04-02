const sampleGroup = document.querySelector("svg g.samples");
if (sampleGroup === null) {
  throw new Error("oups");
}
const lineGroup = document.querySelector("svg g.lines");
if (lineGroup === null) {
  throw new Error("oups");
}

const circlePerimeter = 2 * Math.PI;

const cx0 = 0;
const cy0 = 0;
const r = 45;

const samples = 100;
const multiplicationFactor = 4;

const offset = -Math.PI / 2;

for (let i = 0; i < samples; i++) {
  const angle = i * (circlePerimeter / samples) + offset;
  const x = cx0 + r * Math.cos(angle);
  const y = cy0 + r * Math.sin(angle);

  const elt = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  elt.setAttribute("r", "1");
  elt.setAttribute("cx", x.toString());
  elt.setAttribute("cy", y + "");

  console.dir(elt);
  sampleGroup.appendChild(elt);
}

for (let i = 0; i < samples; i++) {
  const angle1 = i * (circlePerimeter / samples) + offset;
  const x1 = cx0 + r * Math.cos(angle1);
  const y1 = cy0 + r * Math.sin(angle1);

  const angle2 =
    multiplicationFactor * (i * (circlePerimeter / samples)) + offset;
  const x2 = cx0 + r * Math.cos(angle2);
  const y2 = cy0 + r * Math.sin(angle2);

  const elt = document.createElementNS("http://www.w3.org/2000/svg", "line");
  elt.setAttribute("x1", x1 + "");
  elt.setAttribute("y1", y1 + "");
  elt.setAttribute("x2", x2 + "");
  elt.setAttribute("y2", y2 + "");

  console.dir(elt);
  lineGroup.appendChild(elt);
}
