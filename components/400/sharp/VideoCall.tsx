import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoCall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h640v275l160-160v410L720-435v275zm60-60h520v-520H140zm0 0v-520zm232-100h60v-132h132v-60H432v-132h-60v132H240v60h132z" />
  </svg>
);
export default SvgVideoCall;
