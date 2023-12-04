import * as React from "react";
import type { SVGProps } from "react";
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z" />
  </svg>
);
export default SvgChat;
