import * as React from "react";
import type { SVGProps } from "react";
const SvgWindowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M510-450h330v330H510zm0-60v-330h330v330zm-60 0H120v-330h330zm0 60v330H120v-330z" />
  </svg>
);
export default SvgWindowFill;
