import * as React from "react";
import type { SVGProps } from "react";
const SvgViewAgenda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-330h720v330zm60-60h600v-210H180zm-60-330v-330h720v330zm60-60h600v-210H180zm0 180v210zm0-390v210z" />
  </svg>
);
export default SvgViewAgenda;
