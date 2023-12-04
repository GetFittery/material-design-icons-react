import * as React from "react";
import type { SVGProps } from "react";
const SvgHeatPump = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70m-20-61v-131l-92 92q20 17 43 27t49 12m40 0q26-3 49-13.5t43-25.5l-92-92zm120-67q16-20 27-43t13-49H528zm-92-132h131q-2-26-12-49t-27-43zm-28-28 92-92q-20-16-43-26.5T500-659zm-19.825 78q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5M460-528v-131q-26 1-49 11.5T368-620zm-159 28h131l-92-92q-16 20-26.5 43T301-500m39 132 92-92H301q3 26 13 49t26 43M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgHeatPump;
