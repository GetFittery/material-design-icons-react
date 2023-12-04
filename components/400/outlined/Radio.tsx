import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-24 0-42-18t-18-42v-511q0-22 15-38.5t35-24.5l496-200 19 50-359 144h534q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-310H140zm179.183-63Q360-203 388-231.183q28-28.183 28-69T387.817-369q-28.183-28-69-28T250-368.817q-28 28.183-28 69T250.183-231q28.183 28 69 28M140-510h520v-60h60v60h100v-150H140zm0 370v-310z" />
  </svg>
);
export default SvgRadio;
