import * as React from "react";
import type { SVGProps } from "react";
const SvgBento = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-200v-560h800v560zm470-310h270v-190H550zM140-260h350v-440H140zm180-170q-20 0-35-15t-15-35.5q0-20.5 15-35t35.5-14.5q20.5 0 35 14.583Q370-500.833 370-480q0 20-14.583 35-14.584 15-35.417 15m230 170h270v-190H550z" />
  </svg>
);
export default SvgBento;
