import * as React from "react";
import type { SVGProps } from "react";
const SvgTextFields = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z" />
  </svg>
);
export default SvgTextFields;
