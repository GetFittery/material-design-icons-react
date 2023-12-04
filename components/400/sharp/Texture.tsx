import * as React from "react";
import type { SVGProps } from "react";
const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-45l678-675h42v44L161-120zm0-278v-86l356-356h86zm0-320v-122h122zm598 598 122-122v122zm-320 0 442-442v86L484-120z" />
  </svg>
);
export default SvgTexture;
