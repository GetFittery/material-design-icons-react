import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935zm38.782-68.13h343.218L821.217-480 651.609-775.935H308.391L137.783-480zM480-480" />
  </svg>
);
export default SvgHexagon;
