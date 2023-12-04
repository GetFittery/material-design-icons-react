import * as React from "react";
import type { SVGProps } from "react";
const SvgPinchZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-490v-170h40v102l131-131 28 28-131 131h102v40zm259-231-28-28 131-131H300v-40h170v170h-40v-102zM544-40 304-280l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370zm63-290v-200h60v200zm126 0v-160h60v160zm-36 105" />
  </svg>
);
export default SvgPinchZoomOut;
