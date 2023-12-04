import * as React from "react";
import type { SVGProps } from "react";
const SvgFax = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-120v-520h240v40-200h400v200h160v440H320v40zm60-60h120v-400H140zm240-420h280v-140H380zm-60 380h500v-320H320zm60-60h140v-200H380zm-60 60v-320zm240-180h80v-80h-80zm120 0h80v-80h-80zM560-280h80v-80h-80zm120 0h80v-80h-80z" />
  </svg>
);
export default SvgFax;
