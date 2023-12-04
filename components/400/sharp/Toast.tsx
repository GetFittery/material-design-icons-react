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
    <path d="M240-240h480v-60H240zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgToast;
