import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterFrames = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-720h240l160-160 160 160h240v720zm60-60h680v-600H140zm100-100v-400h480v400zm60-60h360v-280H300zm180-139" />
  </svg>
);
export default SvgFilterFrames;
