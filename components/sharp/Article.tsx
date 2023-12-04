import * as React from "react";
import type { SVGProps } from "react";
const SvgArticle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3v18h18V3zm11 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z" />
  </svg>
);
export default SvgArticle;
