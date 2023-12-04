import * as React from "react";
import type { SVGProps } from "react";
const SvgWallLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-240h60v240zm187-380h426l-84-280H391zm0 0h426zm-87 290v-60h270v-170H226l120-400h348l120 400H550v230z" />
  </svg>
);
export default SvgWallLamp;
