import * as React from "react";
import type { SVGProps } from "react";
const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M121-200v-560h719v560zm500-310h159v-190H621zm-221 0h161v-190H400zm-219 0h159v-190H181zm0 250h159v-190H181zm219 0h161v-190H400zm221 0h159v-190H621z" />
  </svg>
);
export default SvgViewModule;
