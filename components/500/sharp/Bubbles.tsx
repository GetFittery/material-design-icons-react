import * as React from "react";
import type { SVGProps } from "react";
const SvgBubbles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m399.196-628.478 143.565 144.043v-102.043h65.5v214.369h-214.37v-65.5h103.044L353.13-581.174zm373.997 474.696q-46.125 0-79.42-33.176-33.295-33.175-33.295-79.913t33.325-79.455q33.325-32.717 80.003-32.717 46.578 0 79.495 32.758 32.917 32.759 32.917 79.83 0 46.238-33.033 79.455-33.033 33.218-79.992 33.218m-699.171-.24v-652.196h812.196v367.175h-68.37v-298.805H142.152v515.696h458.326v68.13z" />
  </svg>
);
export default SvgBubbles;
