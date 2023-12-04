import * as React from "react";
import type { SVGProps } from "react";
const SvgSettopComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-280v-400h800v400zm60-60h680v-280H140zm80-110h220v-60H220zm340 0h60v-60h-60zm120 0h60v-60h-60zM140-340v-280z" />
  </svg>
);
export default SvgSettopComponent;
