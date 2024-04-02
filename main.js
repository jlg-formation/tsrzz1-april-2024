const samplesGroup = document.querySelector("svg g.samples");
if (samplesGroup === null) {
  throw new Error("oups");
}

const circlePerimeter = 2 * Math.PI;

const cx0 = 0;
const cy0 = 0;
const r = 45;

for (let i = 0; i < 10; i++) {
  const angle = i * (circlePerimeter / 10);
  const x = cx0 + r * Math.cos(angle);
  const y = cy0 + r * Math.sin(angle);

  const elt = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  elt.setAttribute("r", "1");
  elt.setAttribute("cx", x.toString());
  elt.setAttribute("cy", y + "");

  console.dir(elt);
  samplesGroup.appendChild(elt);
}
