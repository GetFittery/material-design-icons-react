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
    <path d="m220-242 280 112v-588L220-830zm-22 55q-17-7-27.5-21.5T160-242v-578q0-24.75 17.625-42.375T220-880l300 106q18 6 29 21.53 11 15.531 11 34.47v588q0 32.011-26.5 49.506Q507-63 478-75zm302-13v-60h240v-560H220v-60h520q24.75 0 42.375 17.625T800-820v560q0 24.75-17.625 42.375T740-200zm-280-42v-588z" />
  </svg>
);
export default SvgDualScreen;
