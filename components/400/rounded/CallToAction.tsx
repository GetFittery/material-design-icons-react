import * as React from "react";
import type { SVGProps } from "react";
const SvgCallToAction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm149-54h383q21.667 0 36.833-15.441Q724-304.882 724-326.941 724-349 708.833-364 693.667-379 672-379H288q-21.667 0-36.833 15.235-15.167 15.236-15.167 37Q236-305 251.458-289.5 266.917-274 289-274" />
  </svg>
);
export default SvgCallToAction;
