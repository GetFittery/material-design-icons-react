import * as React from "react";
import type { SVGProps } from "react";
const SvgPanTool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M344-40 54-468l62-53 164 124v-443h60v558L166-410l209 310h405v-700h60v760zm103-440v-440h60v440zm167 0v-400h60v400zM507-290" />
  </svg>
);
export default SvgPanTool;
