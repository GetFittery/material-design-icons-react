import * as React from "react";
import type { SVGProps } from "react";
const SvgTabGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-200v-680h680v680zm60-60h560v-380H520v-180H260zM80-80v-680h60v620h620v60zm180-740v560z" />
  </svg>
);
export default SvgTabGroup;
