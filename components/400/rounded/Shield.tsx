import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-84q-5.32 0-9.88-1-4.56-1-9.12-3-139-47-220-168.5t-81-266.606V-719q0-19.257 10.875-34.662Q181.75-769.068 199-776l260-97q11-4 21-4t21 4l260 97q17.25 6.932 28.125 22.338Q800-738.257 800-719v195.894Q800-378 719-256.5T499-88q-4.56 2-9.12 3T480-84m0-59q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143m0-337" />
  </svg>
);
export default SvgShield;
