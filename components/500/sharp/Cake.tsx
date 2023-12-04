import * as React from "react";
import type { SVGProps } from "react";
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M108.521-74.5v-325.457h87V-643.63h250.414v-59.935q-20-14.376-30.5-31.443t-10.5-41.359q0-15.307 5.619-29.524 5.62-14.218 16.337-24.935L480-886.696l53.109 55.87q10.717 10.717 16.837 24.935 6.119 14.217 6.119 29.524 0 24.185-11 41.315-11 17.132-31 31.487v59.935h250.414v243.673h87V-74.5zm155.37-327.13h432.457V-575.5H263.891zm-87 259h606.457V-333.5H176.891zm87-259h432.457zm-87 259h606.457zm614.588-259H168.521z" />
  </svg>
);
export default SvgCake;
