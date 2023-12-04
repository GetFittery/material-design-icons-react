import * as React from "react";
import type { SVGProps } from "react";
const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-360h60v-130h184v85l116-115-116-116v86H320zM480-50 50-480l430-430 430 430zm0-86 344-344-344-344-344 344zm0-344" />
  </svg>
);
export default SvgDirections;
