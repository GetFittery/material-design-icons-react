import * as React from "react";
import type { SVGProps } from "react";
const SvgTopic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 6-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z" />
  </svg>
);
export default SvgTopic;