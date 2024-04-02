import { circlePerimeter, cx0, cy0, offset, r } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngle = (index: number, samples: number): number => {
  return index * (circlePerimeter / samples) + offset;
};

export const getPointOnCircle = (angle: number): Point => {
  return { x: cx0 + r * Math.cos(angle), y: cy0 + r * Math.sin(angle) };
};
