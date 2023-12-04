import * as React from "react";
import type { SVGProps } from "react";
const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M329-700v440zm397.5 505.5v-571h130v571zm-463 0v-571h433v571zm-160 0v-571h130v571zM329-260h302v-440H329z" />
  </svg>
);
export default SvgViewArray;
