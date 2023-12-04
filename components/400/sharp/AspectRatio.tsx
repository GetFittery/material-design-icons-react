import * as React from "react";
import type { SVGProps } from "react";
const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M577-274h191v-194h-60v134H577zM193-492h60v-134h131v-60H193zM80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgAspectRatio;
