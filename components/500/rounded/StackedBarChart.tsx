import * as React from "react";
import type { SVGProps } from "react";
const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M229.901-155.935q-30.575 0-52.031-21.526-21.457-21.527-21.457-52.061v-368.565h147.174v368.565q0 30.534-21.556 52.061-21.555 21.526-52.13 21.526m-73.488-502.152v-73.675q0-30.347 21.556-51.923 21.555-21.576 52.13-21.576 30.575 0 52.031 21.639 21.457 21.638 21.457 51.948v73.587zm323.488 502.152q-30.575 0-52.031-21.526-21.457-21.527-21.457-52.061v-248.565h147.174v248.565q0 30.534-21.556 52.061-21.555 21.526-52.13 21.526m-73.488-382.152v-73.675q0-30.347 21.556-51.923 21.555-21.576 52.13-21.576 30.575 0 52.031 21.639 21.457 21.638 21.457 51.948v73.587zm323.488 382.152q-30.575 0-52.031-21.526-21.457-21.527-21.457-52.061v-128.565h147.174v128.565q0 30.534-21.556 52.061-21.555 21.526-52.13 21.526m-73.488-262.152v-73.675q0-30.347 21.556-51.923 21.555-21.576 52.13-21.576 30.575 0 52.031 21.639 21.457 21.638 21.457 51.948v73.587z" />
  </svg>
);
export default SvgStackedBarChart;