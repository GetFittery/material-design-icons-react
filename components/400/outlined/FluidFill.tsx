import * as React from "react";
import type { SVGProps } from "react";
const SvgFluidFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M520-40q-28.875 0-49.438-20.563Q450-81.124 450-110v-92q-106-11-178-90t-72-188v-380q0-24.75 17.625-42.375T260-920h440q24.75 0 42.375 17.625T760-860v380q0 109-72 188t-178 90v102h250v60zm40-390h134q3-12 4.5-24.5T700-480v-50H520v-60h180v-100H480v-60h220v-110H260v350h110q32 0 59.5 10t47.5 29q22 21 42.5 31t40.5 10" />
  </svg>
);
export default SvgFluidFill;
