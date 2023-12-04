import * as React from "react";
import type { SVGProps } from "react";
const SvgToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-89q-8 0-15.5-2T450-97L150-269q-14-8-22-21.5t-8-30.5v-328q0-17 8.5-31t22.5-22l300-163q7-4 14-5.5t15-1.5q8 0 15 1.5t14 5.5l300 163q14 8 22.5 22t8.5 31v328q0 17-8 30.5T810-269L510-97q-7 4-14.5 6T480-89M366-578q23-23 52.5-37.5T480-630q32 0 61.5 14.5T594-578l153-90-267-142-267 142zm84 412v-167q-52-14-86-54.5T330-480q0-10 1-21t6-24l-157-93v297zm30-224q38 0 64-26.5t26-63.5q0-38-26-64t-64-26q-37 0-63.5 26T390-480q0 37 26.5 63.5T480-390m30 224 270-155v-297l-157 93q5 14 6 24.5t1 20.5q0 52-34 92.5T510-333z" />
  </svg>
);
export default SvgToken;
