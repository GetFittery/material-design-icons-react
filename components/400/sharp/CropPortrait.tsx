import * as React from "react";
import type { SVGProps } from "react";
const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-800h640v800zm60-60h520v-680H220zm0 0v-680z" />
  </svg>
);
export default SvgCropPortrait;
