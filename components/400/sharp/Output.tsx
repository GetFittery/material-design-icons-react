import * as React from "react";
import type { SVGProps } from "react";
const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v150h-60v-90H180v600h600v-90h60v150zm574-174-42-42 113-114H360v-60h405L652-624l42-42 186 186z" />
  </svg>
);
export default SvgOutput;
