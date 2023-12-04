import * as React from "react";
import type { SVGProps } from "react";
const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M111.869-262.152v-435.696q0-28.202 20.014-48.286 20.013-20.084 48.117-20.084h600q28.203 0 48.286 20.084 20.084 20.084 20.084 48.286v435.696q0 28.104-20.084 48.117-20.083 20.013-48.286 20.013H180q-28.104 0-48.117-20.013-20.014-20.013-20.014-48.117m68.131 0h154.5v-435.696H180zm222.63 0h154.74v-435.696H402.63zm222.87 0H780v-435.696H625.5z" />
  </svg>
);
export default SvgViewColumn;
