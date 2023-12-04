import * as React from "react";
import type { SVGProps } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-400h480v-60H240zm0-130h480v-60H240zm0-130h480v-60H240zM80-240v-640h800v800L720-240zm60-60h606l74 80v-600H140zm0 0v-520z" />
  </svg>
);
export default SvgComment;
