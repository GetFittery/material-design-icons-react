import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z" />
  </svg>
);
export default SvgFormatPaint;
