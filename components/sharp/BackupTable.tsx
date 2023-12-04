import * as React from "react";
import type { SVGProps } from "react";
const SvgBackupTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 6v14H6v2h16V6z" />
    <path d="M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z" />
  </svg>
);
export default SvgBackupTable;