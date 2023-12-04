import * as React from "react";
import type { SVGProps } from "react";
const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M641.63-114.022H182.152q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v459.239zm-34.782-68.13V-263q0-35.705 27.223-62.929 27.224-27.223 62.929-27.223h80.848v-424.696H182.152v595.696zM448.565-319.565h62.87v-258h129v-62.87h-320.87v62.87h129zM182.152-182.152v-595.696z" />
  </svg>
);
export default SvgStickyNote;
