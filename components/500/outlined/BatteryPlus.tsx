import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M306.891-74.022q-14.663 0-24.484-9.82-9.82-9.821-9.82-24.245v-679.826q0-14.394 9.82-24.349 9.821-9.956 24.484-9.956h89.044v-64h168.13v64h89.283q14.424 0 24.245 9.956 9.82 9.955 9.82 24.349V-458.5q-17.913-.957-35.065.924-17.152 1.88-33.305 7.358v-303.63H340.957v611.696h144.108q9.478 19.63 22.435 36.663 12.956 17.033 29.109 31.467zm345 0v-125.956H530.696v-68.37h121.195v-120.956h68.131v120.956h126.196v68.37H720.022v125.956z" />
  </svg>
);
export default SvgBatteryPlus;
