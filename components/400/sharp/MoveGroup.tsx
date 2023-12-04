import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-200v-220h60v160h560v-500H260v160h-60v-280h680v680zM80-80v-680h60v620h620v60zm420-264-42-42 93-94H200v-60h351l-93-94 42-42 166 166z" />
  </svg>
);
export default SvgMoveGroup;
