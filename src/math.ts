import { circlePerimeter, cx0, cy0, offset, r0 } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngle = (index: number, samples: number): number => {
  return index * (circlePerimeter / samples) + offset;
};

export const getPointOnCircle = (angle: number): Point => {
  return { x: cx0 + r0 * Math.cos(angle), y: cy0 + r0 * Math.sin(angle) };
};
