import * as React from "react";
import type { SVGProps } from "react";
const SvgCrib = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-380h520v-160H420v-200H320q-42 0-71 29t-29 71zm260.25 240q22.75 0 45.25-3t44.5-10v-167H390v167q22 7 44.75 10t45.5 3M480-80q-80 0-153-30t-130-87l43-43q20 20 42.647 34.931Q305.294-190.139 330-177v-143H160v-320q0-66 47-113t113-47h160v200h320v280H630v143q25-12 47-28.25T719-241l43 43q-57 56-129.677 87Q559.646-80 480-80m-60-460" />
  </svg>
);
export default SvgCrib;
