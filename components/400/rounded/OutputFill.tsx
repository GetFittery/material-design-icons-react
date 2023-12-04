import * as React from "react";
import type { SVGProps } from "react";
const SvgOutputFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v90h-60v-90H180v600h600v-90h60v90q0 24-18 42t-42 18zm585-330H390q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T390-510h375l-92-93q-8-9-8.5-21.1-.5-12.1 8.5-20.9 9-9 21-9t21 9l144 144q5 5 7 10.133 2 5.134 2 11Q868-474 866-469q-2 5-7 10L715-315q-9 9-21 9t-21-9q-9-9-9-21t9-21z" />
  </svg>
);
export default SvgOutputFill;
