import * as React from "react";
import type { SVGProps } from "react";
const SvgPrintDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m813-61-95-95v36H242v-176H80v-246q0-45.05 30.5-75.525Q141-648 186-648h40L61-813l43-43 752 752zM302-180h356v-36L502-372H302zm448-116-60-60h130v-186.215Q820-562 806.775-575 793.55-588 774-588H458l-60-60h376q45.05 0 75.525 30.475Q880-587.05 880-542v246zm-610-60h102v-76h200L286-588H185.806Q166-588 153-574.775 140-561.55 140-542zm518-292v-132H266l-60-60h512v192zm81 155q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9m-553-95h100-146zm588 0h46-362z" />
  </svg>
);
export default SvgPrintDisabled;
