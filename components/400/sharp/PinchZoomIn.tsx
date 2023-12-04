import * as React from "react";
import type { SVGProps } from "react";
const SvgPinchZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m54-476-28-28 130-131H55v-40h170v170h-40v-101zm230-258v-170h40v101l131-131 29 29-131 131h101v40zM544-40 304-280l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370zm63-290v-200h60v200zm126 0v-160h60v160zm-36 105" />
  </svg>
);
export default SvgPinchZoomIn;
