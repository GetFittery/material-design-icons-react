import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M513-220v-50h107v-101h50v151zM290-579v-161h160v50H340v111zM200-40v-880h560v880zm60-90v30h440v-30zm0-60h440v-580H260zm0-640h440v-30H260zm0 0v-30zm0 700v30z" />
  </svg>
);
export default SvgScreenshot;
