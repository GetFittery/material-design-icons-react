import * as React from "react";
import type { SVGProps } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M585-200q-24.75 0-42.375-17.625T525-260v-440q0-24.75 17.625-42.375T585-760h115q24.75 0 42.375 17.625T760-700v440q0 24.75-17.625 42.375T700-200zm-325 0q-24.75 0-42.375-17.625T200-260v-440q0-24.75 17.625-42.375T260-760h115q24.75 0 42.375 17.625T435-700v440q0 24.75-17.625 42.375T375-200zm325-60h115v-440H585zm-325 0h115v-440H260zm0-440v440zm325 0v440z" />
  </svg>
);
export default SvgPause;
