import * as React from "react";
import type { SVGProps } from "react";
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m4 18 2-2h14V4H4z" opacity={0.3} />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z" />
  </svg>
);
export default SvgChatBubble;