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
    <path d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70m-20-61v-131l-92 92q20 17 43 27t49 12m40 0q26-3 49-13.5t43-25.5l-92-92zm120-67q16-20 27-43t13-49H528zm-92-132h131q-2-26-12-49t-27-43zm-28-28 92-92q-20-16-43-26.5T500-659zm-20 78q13 0 21.5-8.5T510-480q0-13-8.5-21.5T480-510q-13 0-21.5 8.5T450-480q0 13 8.5 21.5T480-450m-20-78v-131q-26 1-49 11.5T368-620zm-159 28h131l-92-92q-16 20-26.5 43T301-500m39 132 92-92H301q3 26 13 49t26 43M120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgHeatPump;
