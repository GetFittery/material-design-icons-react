import * as React from "react";
import type { SVGProps } from "react";
const SvgFactCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M2 3v18h20V3zm8 14H5v-2h5zm0-4H5v-2h5zm0-4H5V7h5zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42z"
    />
  </svg>
);
export default SvgFactCheck;
