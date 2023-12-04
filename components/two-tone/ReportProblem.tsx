import * as React from "react";
import type { SVGProps } from "react";
const SvgReportProblem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M12 5.99 4.47 19h15.06zM13 18h-2v-2h2zm-2-4v-4h2v4z"
      opacity={0.3}
    />
    <path d="M12 2 1 21h22zm0 3.99L19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);
export default SvgReportProblem;
