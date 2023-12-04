import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-440v-360h240v360zm60-60h120v-240H540zm180 260H320L200-643v-157h60v148l104.545 352H720zM320-120v-60h400v60zm220-620h120z" />
  </svg>
);
export default SvgFlightClass;
