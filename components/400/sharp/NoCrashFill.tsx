import * as React from "react";
import type { SVGProps } from "react";
const SvgNoCrashFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-726 374-831l42-43 64 64 150-150 42 42zM120 0v-354l95-286h530l95 286V0h-81v-84H200V0zm83-414h554l-55-166H258zm82.765 220Q309-194 324.5-209.75T340-248q0-23.333-15.75-39.667Q308.5-304 286-304q-23.333 0-39.667 16.265Q230-271.471 230-248.235 230-225 246.265-209.5q16.264 15.5 39.5 15.5M675-194q23.333 0 39.667-15.75Q731-225.5 731-248q0-23.333-16.265-39.667Q698.471-304 675.235-304 652-304 636.5-287.735q-15.5 16.264-15.5 39.5Q621-225 636.75-209.5T675-194" />
  </svg>
);
export default SvgNoCrashFill;
