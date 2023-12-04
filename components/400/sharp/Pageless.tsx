import * as React from "react";
import type { SVGProps } from "react";
const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-80v-330h60v270h310v60zm510 0v-60h310v-270h60v330zM40-550v-330h370v60H100v270zm820 0v-270H550v-60h370v330z" />
  </svg>
);
export default SvgPageless;
