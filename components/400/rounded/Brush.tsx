import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M215-117q-33.835 0-66.917-11.5Q115-140 90-166q35-12 50-35t15-62q0-43.75 30.676-74.375Q216.353-368 260.176-368 304-368 334.5-337.375T365-263q0 64-43.5 105T215-117m0-60q35 0 62.5-25t27.5-61q0-20-12.5-32.5T260-308q-20 0-32.5 12.5T215-263q0 39-8.5 57.5T175-183q6 1 20 3.5t20 2.5m230-177-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732zm-185 91" />
  </svg>
);
export default SvgBrush;
