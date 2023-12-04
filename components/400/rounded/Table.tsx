import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180q-24.75 0-42.375-17.625T120-180m60-440h600v-160H180zm220 220h160v-160H400zm0 220h160v-160H400zM180-400h160v-160H180zm440 0h160v-160H620zM180-180h160v-160H180zm440 0h160v-160H620z" />
  </svg>
);
export default SvgTable;
