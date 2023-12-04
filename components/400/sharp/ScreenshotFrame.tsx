import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshotFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-690v-190h190v60H260v130zm0 610v-190h60v130h130v60zm500-610v-130H570v-60h190v190zM570-80v-60h130v-130h60v190z" />
  </svg>
);
export default SvgScreenshotFrame;
