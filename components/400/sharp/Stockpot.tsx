import * as React from "react";
import type { SVGProps } from "react";
const SvgStockpot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-160v-499h720v499zm60-60h600v-379H180zm-60-479v-61h250v-80h220v80h250v61zm360 289" />
  </svg>
);
export default SvgStockpot;
