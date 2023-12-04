import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnificationSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm135-308q32.587 0 55.794-23.206Q354-574.412 354-607q0-32.588-23.206-55.794Q307.587-686 275-686q-32.587 0-55.794 23.206Q196-639.588 196-607q0 32.588 23.206 55.794Q242.413-528 275-528" />
  </svg>
);
export default SvgMagnificationSmall;
