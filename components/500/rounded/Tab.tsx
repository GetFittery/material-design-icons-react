import * as React from "react";
import type { SVGProps } from "react";
const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.152-222.152h675.696V-567H558.065q-14.424 0-24.244-9.821-9.821-9.82-9.821-24.244v-136.783H142.152zm0 68.13q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-515.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13v-515.696z" />
  </svg>
);
export default SvgTab;
