import * as React from "react";
import type { SVGProps } from "react";
const SvgCottage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-180v-341l-60 46q-10.348 8-22.174 6Q66-471 58-481t-6-22q2-12 12-20l96-73v-84q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T220-680v38l224-170q16.211-12 36.105-12Q500-824 516-812l381 290q9.941 7.619 11.471 19.81Q910-490 902-479.63q-8 9.63-19.5 11.13T861-475l-61-46v341q0 24.75-17.625 42.375T740-120H220q-24.75 0-42.375-17.625T160-180m60 0h230v-130q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-310v130h230v-387L480-765 220-567zm0 0h520zm-25-580q-15 0-24.5-11t-4.5-24q11-34 40.062-54.5Q235.125-870 270-870q14 0 26-7.071 12-7.072 18-19.929 5-9 12.5-16t18.5-7q15 0 24.5 11t4.5 24q-12 34-40.75 54.5T270-810q-14 0-25.5 7.5T226-783q-5 9-12.704 16-7.703 7-18.296 7" />
  </svg>
);
export default SvgCottage;
