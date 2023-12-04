import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-120v-73l47-47H80v-600h800v600H652l48 47v73zM140-300h680v-480H140zm0 0v-480z" />
  </svg>
);
export default SvgMonitor;
