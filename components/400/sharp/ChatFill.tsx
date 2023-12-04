import * as React from "react";
import type { SVGProps } from "react";
const SvgChatFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-800h800v640H240zm160-319h313v-60H240zm0-130h480v-60H240zm0-130h480v-60H240z" />
  </svg>
);
export default SvgChatFill;
