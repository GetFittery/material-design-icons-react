import * as React from "react";
import type { SVGProps } from "react";
const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M263-360h170v-50H313v-53h120v-137H263v50h120v54H263zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600zm340-177h178l22-23v-201l-22-22H520zm50-50v-146h100v146z" />
  </svg>
);
export default Svg2D;
