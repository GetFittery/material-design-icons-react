import * as React from "react";
import type { SVGProps } from "react";
const SvgShortText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-390v-60h389v60zm0-120v-60h640v60z" />
  </svg>
);
export default SvgShortText;
