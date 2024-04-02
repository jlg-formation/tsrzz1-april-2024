const samplesGroup = document.querySelector("svg g.samples");
if (samplesGroup === null) {
  throw new Error("oups");
}

for (let i = 0; i < 10; i++) {
  const elt = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  elt.setAttribute("r", "1");
  elt.setAttribute("cx", "23");
  elt.setAttribute("cy", "32");

  console.dir(elt);
  samplesGroup.appendChild(elt);
}
