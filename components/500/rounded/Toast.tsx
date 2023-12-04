import * as React from "react";
import type { SVGProps } from "react";
const SvgToast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M272.208-242.152h415.584q12.806 0 21.431-8.676 8.625-8.675 8.625-21.5 0-12.824-8.625-21.324-8.625-8.5-21.431-8.5H272.208q-12.806 0-21.431 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.431 8.5m-90.056 128.13q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default SvgToast;
