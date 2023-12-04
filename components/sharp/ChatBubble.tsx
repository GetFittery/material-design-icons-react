import * as React from "react";
import type { SVGProps } from "react";
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 2H2v20l4-4h16z" />
  </svg>
);
export default SvgChatBubble;
