import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M440-400v-80h80v80zm-160 0v-80h80v80zm320 0v-80h80v80zM440-240v-80h80v80zm-160 0v-80h80v80zm320 0v-80h80v80zM120-80v-740h125v-60h65v60h340v-60h65v60h125v740zm60-60h600v-430H180zm0-490h600v-130H180zm0 0v-130z" />
  </svg>
);
export default SvgCalendarMonth;
