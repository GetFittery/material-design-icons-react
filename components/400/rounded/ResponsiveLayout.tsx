import * as React from "react";
import type { SVGProps } from "react";
const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-180v-385q0-24.75 17.625-42.375T180-625h155v-155q0-24.75 17.625-42.375T395-840h385q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180q-24.75 0-42.375-17.625T120-180m505 0h155v-600H395v155h170q24.75 0 42.375 17.625T625-565zm-230 0h170v-385H395zm-215 0h155v-385H180z" />
  </svg>
);
export default SvgResponsiveLayout;
