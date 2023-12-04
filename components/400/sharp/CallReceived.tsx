import * as React from "react";
import type { SVGProps } from "react";
const SvgCallReceived = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-200v-396h60v294l498-498 42 42-498 498h294v60z" />
  </svg>
);
export default SvgCallReceived;
