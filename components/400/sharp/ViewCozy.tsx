import * as React from "react";
import type { SVGProps } from "react";
const SvgViewCozy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-540v-300h300v300zm60-60h180v-180H180zm-60 480v-300h300v300zm60-60h180v-180H180zm360-360v-300h300v300zm60-60h180v-180H600zm-60 480v-300h300v300zm60-60h180v-180H600zm0-180" />
  </svg>
);
export default SvgViewCozy;
