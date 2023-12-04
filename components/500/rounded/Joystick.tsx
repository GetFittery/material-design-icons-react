import * as React from "react";
import type { SVGProps } from "react";
const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M232.652-435.283 480-292.587l246.587-143.696-212.522-122.304v134.283h-68.13v-134.283zm213.283-199.671v-28.285q-43.239-11.957-71.62-47.546-28.38-35.59-28.38-82.324 0-55.418 39.291-94.742 39.292-39.323 94.875-39.323t94.774 39.323q39.19 39.324 39.19 94.742 0 46.734-28.38 82.324-28.381 35.589-71.62 47.546v28.285l297.848 171.758q16.402 9.367 25.353 25.066 8.952 15.698 8.952 34.108v97.37q0 18.41-8.952 34.108-8.951 15.699-25.353 25.066L514.065-75.674q-16.241 9.196-34.229 9.196t-33.901-9.196L148.087-247.478q-16.402-9.367-25.234-25.066-8.831-15.698-8.831-34.108v-97.37q0-18.41 8.831-34.108 8.832-15.699 25.234-25.066zm0 398.628L180.478-388.935v83.479l299.642 172.76 299.641-172.76v-84.479L514.065-236.326q-16.241 9.196-34.229 9.196t-33.901-9.196m33.947-490.848q27.424 0 46.738-19.197 19.315-19.196 19.315-46.62 0-27.424-19.197-46.738t-46.62-19.314q-27.424 0-46.738 19.196-19.315 19.197-19.315 46.621 0 27.423 19.197 46.738 19.197 19.314 46.62 19.314M480-132.696" />
  </svg>
);
export default SvgJoystick;