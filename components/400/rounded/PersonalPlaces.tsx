import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonalPlaces = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-150v-590q0-24.75 17.625-42.375T300-800h331q14 0 27.5 6.5T680-775l95 132q11 15.972 11 34.986Q786-589 775-573l-95 132q-8 12-21.5 18.5T631-416H300v266q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T240-150m60-326h331l95-132-95-132H300zm0 0v-264z" />
  </svg>
);
export default SvgPersonalPlaces;
