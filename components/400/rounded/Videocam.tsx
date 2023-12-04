import * as React from "react";
import type { SVGProps } from "react";
const SvgVideocam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l134-134q7-7 16.5-3.458Q880-658.917 880-649v338q0 9.917-9.5 13.458Q861-294 854-301L720-435v215q0 24-18 42t-42 18zm0-60h520v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgVideocam;
