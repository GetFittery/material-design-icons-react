import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-200v-560h85v560zm120 0v-560h80v560zm120 0v-560h40v560zm120 0v-560h80v560zm120 0v-560h120v560zm160 0v-560h40v560zm120 0v-560h120v560z" />
  </svg>
);
export default SvgBarcode;
