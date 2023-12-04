import * as React from "react";
import type { SVGProps } from "react";
const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-175h60v115h115v60zm545 0v-60h115v-115h60v175zm-185-60q-125 0-212.5-87.5T180-480q0-125 87.5-212.5T480-780q125 0 212.5 87.5T780-480q0 125-87.5 212.5T480-180m0-60q99.6 0 169.8-70.2Q720-380.4 720-480q0-99.6-70.2-169.8Q579.6-720 480-720q-99.6 0-169.8 70.2Q240-579.6 240-480q0 99.6 70.2 169.8Q380.4-240 480-240M120-665v-175h175v60H180v115zm660 0v-115H665v-60h175v175zM480-480" />
  </svg>
);
export default SvgAllOut;
