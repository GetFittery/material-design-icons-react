import * as React from "react";
import type { SVGProps } from "react";
const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-720h210v-80h60v80h100v-80h60v80h210v720zm60-60h520v-600H220zm100-440h320v-60H320zm160 315q33 0 56.5-23.5T560-344q0-26-15-45t-65-76q-50 58-65 76.5T400-344q0 32 23.5 55.5T480-265M220-140v-600z" />
  </svg>
);
export default SvgGasMeter;
