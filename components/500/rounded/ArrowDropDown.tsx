import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m461.895-372.366-162.141-161.14q-2.45-2.451-4.069-5.54-1.62-3.089-1.62-6.551 0-7.273 4.765-12.37 4.764-5.098 12.387-5.098h337.566q7.623 0 12.387 5.234 4.765 5.234 4.765 12.372 0 1.785-5.717 11.981L498.104-372.365q-3.43 3.43-8.112 5.55-4.682 2.119-10.014 2.119-5.331 0-9.992-2.119-4.66-2.12-8.091-5.551" />
  </svg>
);
export default SvgArrowDropDown;
