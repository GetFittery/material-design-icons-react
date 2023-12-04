import * as React from "react";
import type { SVGProps } from "react";
const SvgCallMade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294z" />
  </svg>
);
export default SvgCallMade;
