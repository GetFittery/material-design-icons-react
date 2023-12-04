import * as React from "react";
import type { SVGProps } from "react";
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M317.37-37.37v-60h325.26v60zm-100-120v-765.26h525.26v765.26zM285.5-285.5v60h389v-60zm0-60h389v-389h-389zm0-449h389v-60h-389zm0 0v-60zm0 509v60z" />
  </svg>
);
export default SvgDock;
