import * as React from "react";
import type { SVGProps } from "react";
const SvgBidLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-170v110h600v-356L551-307q-9 9-21 9t-21-9L353-463zm0-85 152-152q9-9 21-9t21 9l156 156 250-250v-159H180zm0-161v-85 250-177 258-173 177zm0 161v-405 409-177zm0 85v-173 177-250 356z" />
  </svg>
);
export default SvgBidLandscape;
