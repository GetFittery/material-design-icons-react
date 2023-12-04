import * as React from "react";
import type { SVGProps } from "react";
const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-69 370.891-234.022H74.021v-652.196h812.197v652.196h-296.87zM142.152-302.152h675.696v-515.696H142.152zm0 0v-515.696z" />
  </svg>
);
export default SvgTooltip;
