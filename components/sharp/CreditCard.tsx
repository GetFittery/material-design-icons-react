import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z" />
  </svg>
);
export default SvgCreditCard;
