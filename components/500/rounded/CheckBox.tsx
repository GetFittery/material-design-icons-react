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
    <path d="m418.522-412.5-93.457-93.457q-10.195-9.956-24.011-9.456-13.815.5-23.891 10.696-10.076 10.195-10.076 23.891 0 13.696 9.956 23.652l117.37 116.609q10.304 10.195 24.043 10.195 13.74 0 24.174-10.195l244.131-244.609q10.196-9.956 10.076-23.798-.12-13.842-10.076-23.985-10.143-9.956-23.865-9.956-13.722 0-23.918 9.956zm-236.37 298.478q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default SvgCheckBox;