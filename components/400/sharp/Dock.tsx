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
    <path d="M320-40v-60h320v60zM220-160v-760h520v760zm60-120v60h400v-60zm0-60h400v-400H280zm0-460h400v-60H280zm0 0v-60zm0 520v60z" />
  </svg>
);
export default SvgDock;
