import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-40 359-161H180q-24 0-42-18t-18-42v-600q0-24.75 18-42.375T180-881h600q24 0 42 17.625T840-821v600q0 24-18 42t-42 18H601zM180-258q60-56 135.896-90.5 75.897-34.5 164-34.5Q568-383 644-348.5 720-314 780-258v-563H180zm302-204q58 0 98-40t40-98q0-58-40-98t-98-40q-58 0-98 40t-40 98q0 58 40 98t98 40M235-221h490v-9q-54-46-116-69.5T480-323q-67 0-129 23.5T235-230zm247-301q-32.5 0-55.25-22.75T404-600q0-32.5 22.75-55.25T482-678q32.5 0 55.25 22.75T560-600q0 32.5-22.75 55.25T482-522m-2-18" />
  </svg>
);
export default SvgPersonPin;
