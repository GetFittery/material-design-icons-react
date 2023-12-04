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
    <path d="M120-659h720v409q0 37.5-26.25 63.75T750-160H210q-37.5 0-63.75-26.25T120-250zm60 60v349q0 12.75 8.625 21.375T210-220h540q12.75 0 21.375-8.625T780-250v-349zm-60-100v-61h250v-50q0-12.75 8.625-21.375T400-840h160q12.75 0 21.375 8.625T590-810v50h250v61zm360 289" />
  </svg>
);
export default SvgStockpot;
