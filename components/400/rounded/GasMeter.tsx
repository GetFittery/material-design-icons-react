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
    <path d="M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h50v-50q0-13 8.5-21.5T400-880q13 0 21.5 8.5T430-850v50h100v-50q0-13 8.5-21.5T560-880q13 0 21.5 8.5T590-850v50h50q66 0 113 47t47 113v400q0 66-47 113T640-80zm0-60h320q42 0 71-29t29-71v-400q0-42-29-71t-71-29H320q-42 0-71 29t-29 71v400q0 42 29 71t71 29m30-440h260q13 0 21.5-8.5T640-610q0-13-8.5-21.5T610-640H350q-13 0-21.5 8.5T320-610q0 13 8.5 21.5T350-580m130 315q33 0 56.5-23.5T560-344q0-13-3-23t-12-22l-48-56q-7-8-17-8t-17 8l-48 56q-9 12-12 21.5t-3 23.5q0 32 23.5 55.5T480-265M220-740v600z" />
  </svg>
);
export default SvgGasMeter;