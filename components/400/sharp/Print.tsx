import * as React from "react";
import type { SVGProps } from "react";
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M658-648v-132H302v132h-60v-192h476v192zm-518 60h680zm599 95q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9m-81 313v-192H302v192zm60 60H242v-176H80v-352h800v352H718zm102-236v-232H140v232h102v-76h476v76z" />
  </svg>
);
export default SvgPrint;
