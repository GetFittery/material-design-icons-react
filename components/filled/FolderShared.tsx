import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderShared = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z" />
  </svg>
);
export default SvgFolderShared;