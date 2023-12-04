import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M387.196-138.565h184.847v-183.848H387.196zM138.565-387.196h183.848v-184.847H138.565zm248.631 0h184.847v-184.847H387.196zm249.391 0h184.848v-184.847H636.587zm0-249.391h184.848v-184.848H636.587zM322.413-74.022v-248.391H74.022v-314.174h498.021v-249.631h314.175v563.805H636.587v248.391z" />
  </svg>
);
export default SvgCrossword;
