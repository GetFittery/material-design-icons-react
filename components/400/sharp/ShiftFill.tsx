import * as React from "react";
import type { SVGProps } from "react";
const SvgShiftFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-120v-310H120l360-450 360 450H640v310z" />
  </svg>
);
export default SvgShiftFill;
