import * as React from "react";
import type { SVGProps } from "react";
const SvgInkHighlighter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m545.63-401.022-57.521-56.521-56.522-57.522-214.109 213.869 114.283 114.283zm-65.304-163.021 56.761 57.76 57.522 56.522 214.674-214.674-114.044-114.282zM62.348-113.782 184.26-235.456l-40.392-40.631v-47.978l263.609-263.848 211 211L355.63-114.065h-48.739l-44.63-44.391-44.913 44.674zm345.13-474.131 290.761-290.761 211 211.239-290.761 290.522z" />
  </svg>
);
export default SvgInkHighlighter;
