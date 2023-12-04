import * as React from "react";
import type { SVGProps } from "react";
const SvgDualScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m220-242 280 112v-588L220-830zm-60 40v-678h60l340 120v718zm340 2v-60h240v-560H220v-60h580v680zm-280-42v-588z" />
  </svg>
);
export default SvgDualScreen;
