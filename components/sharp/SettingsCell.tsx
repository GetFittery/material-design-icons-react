import * as React from "react";
import type { SVGProps } from "react";
const SvgSettingsCell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM6 0v20h12V0zm10 16H8V4h8z" />
  </svg>
);
export default SvgSettingsCell;
