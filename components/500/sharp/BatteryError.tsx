import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M272.587-74.022v-748.196h123.348v-64h168.13v64h123.348v410.761q-19.152 5.522-35.924 14.142-16.772 8.619-32.446 20.576v-377.109H340.957v611.696h206.065q5.077 19.319 13.466 35.972 8.389 16.652 21.121 32.158zM670.478-73.782l-47.978-47.74 84-84-84-84 47.978-47.978 84 84 84-84 47.74 47.978-83 84 83 84-47.74 47.74-84-83z" />
  </svg>
);
export default SvgBatteryError;
