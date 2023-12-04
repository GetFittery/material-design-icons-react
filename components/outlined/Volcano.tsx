import * as React from "react";
import type { SVGProps } from "react";
const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 8h-7l-2 5H6l-4 9h20zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08zM13 1h2v4h-2zm3.121 4.468L18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z" />
  </svg>
);
export default SvgVolcano;