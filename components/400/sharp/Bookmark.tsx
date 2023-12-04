import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-120v-725h560v725L480-240zm60-91 220-93 220 93v-574H260zm0-574h440z" />
  </svg>
);
export default SvgBookmark;
