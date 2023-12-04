import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m418.522-316.456 291.63-291.87-47.782-48.022L418.522-412.5 301.674-529.348l-47.783 48.022zm-236.37 202.434q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default SvgCheckBox;
