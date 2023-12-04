import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M307-120q-16 0-29.787-7.875Q263.426-135.75 255-150L81-450q-8-14.328-8-30.164Q73-496 81-510l174-300q8.426-14.25 22.213-22.125T307-840h346q16 0 29.787 7.875Q696.574-824.25 705-810l174 300q8 14.328 8 30.164Q887-464 879-450L705-150q-8.426 14.25-22.213 22.125T653-120zm-1-60h348l172-300-172-300H306L133-480zm174-300" />
  </svg>
);
export default SvgHexagon;
