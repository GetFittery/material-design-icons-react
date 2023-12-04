import * as React from "react";
import type { SVGProps } from "react";
const SvgLooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-660q-150 0-258.5 101T101-311q-1 13-9.5 22T70-280q-12 0-21-8.5T41-309q6-86 42.5-161T179-600.5Q238-656 315.5-688T480-720q87 0 164.5 32T781-600.5Q840-545 876.5-470T919-309q1 12-8 20.5t-21 8.5q-13 0-21.5-9t-9.5-22q-12-147-120-248T480-660m0 120q-102 0-175.5 67T221-306q-1 11-10 18.5t-21 7.5q-13 0-21.5-9.5T162-312q12-123 102-205.5T480-600q126 0 216 82.5T798-312q2 13-6.5 22.5T770-280q-12 0-21-7.5T739-306q-10-100-83.5-167T480-540" />
  </svg>
);
export default SvgLooks;
