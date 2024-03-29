import * as React from "react";
import type { SVGProps } from "react";
const SvgEscalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-250h126l200-360h74q20.833 0 35.417-15Q730-640 730-660.5t-14.583-35Q700.833-710 680-710H554L354-350h-74q-20 0-35 14.583-15 14.584-15 35.417 0 20 15 35t35 15M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgEscalator;
