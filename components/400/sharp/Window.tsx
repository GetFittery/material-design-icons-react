import * as React from "react";
import type { SVGProps } from "react";
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M840-120H120v-720h720zM510-450v270h270v-270zm0-60h270v-270H510zm-60 0v-270H180v270zm0 60H180v270h270z" />
  </svg>
);
export default SvgWindow;
