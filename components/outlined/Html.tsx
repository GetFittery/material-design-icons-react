import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2zm14 0H13c-.55 0-1 .45-1 1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5c0-.55-.45-1-1-1M11 9H6v1.5h1.75V15h1.5v-4.5H11zm13 6v-1.5h-2.5V9H20v6z" />
  </svg>
);
export default SvgHtml;