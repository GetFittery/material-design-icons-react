import * as React from "react";
import type { SVGProps } from "react";
const SvgCooking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M390-120v-130H80v-60h310q24.75 0 42.375 17.625T450-250v130zm120 0v-130q0-24.75 17.625-42.375T570-310h310v60H570v130zM230-370q-45.833 0-77.917-32.083Q120-434.167 120-480v-180h720v180q0 45.833-32.083 77.917Q775.833-370 730-370zm0-60h500q21.25 0 35.625-14.375T780-480v-120H180v120q0 21.25 14.375 35.625T230-430M120-700v-60h250v-50q0-12.75 8.625-21.375T400-840h160q12.75 0 21.375 8.625T590-810v50h250v60zm60 270v-170z" />
  </svg>
);
export default SvgCooking;
