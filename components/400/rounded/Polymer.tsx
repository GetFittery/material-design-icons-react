import * as React from "react";
import type { SVGProps } from "react";
const SvgPolymer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-160h-87q-17 0-30.5-8.5T181-191L36-451q-8-14-8-29t8-29l147-261q8-14 21.5-22t30.5-8q35 0 52 29.5t0 59.5L158-480l120 216 311-507q8-14 22-21.5t30-7.5h83q17 0 30.5 8t21.5 22l147 261q8 14 8 29t-8 29L777-190q-8 14-21.5 22t-30.5 8q-35 0-52-29.5t0-59.5l129-231-121-214-309 505q-8 14-22 21.5t-30 7.5" />
  </svg>
);
export default SvgPolymer;
