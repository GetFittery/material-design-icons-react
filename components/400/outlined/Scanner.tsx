import * as React from "react";
import type { SVGProps } from "react";
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M751-460 146-700l22-60 615 244q32 13 44.5 34t12.5 57v205q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-180q0-24 18-42t42-18zm29 240v-180H180v180zm-400-60h340v-60H380zm-109.825 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5M180-220v-180z" />
  </svg>
);
export default SvgScanner;
