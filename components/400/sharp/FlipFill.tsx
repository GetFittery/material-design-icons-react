import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M615-780v-60h60v60zm0 660v-60h60v60zm165-660v-60h60v60zm0 660v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zM349-120H120v-720h229v60H180v600h169zm103 80v-880h60v880z" />
  </svg>
);
export default SvgFlipFill;
