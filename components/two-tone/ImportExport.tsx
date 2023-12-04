import * as React from "react";
import type { SVGProps } from "react";
const SvgImportExport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 6.99h3V14h2V6.99h3L9 3zM14 10v7.01h-3L15 21l4-3.99h-3V10z" />
  </svg>
);
export default SvgImportExport;