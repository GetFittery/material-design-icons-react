import * as React from "react";
import type { SVGProps } from "react";
const SvgConveyorBelt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M201-120q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35zm0-60h560q25.5 0 42.75-17.25T821-240q0-25.5-17.25-42.75T761-300H201q-25.5 0-42.75 17.25T141-240q0 25.5 17.25 42.75T201-180m190-260q-12.75 0-21.375-8.625T361-470v-340q0-12.75 8.625-21.375T391-840h340q12.75 0 21.375 8.625T761-810v340q0 12.75-8.625 21.375T731-440zm30-60h280v-280H421zM79-530v-60h221v60zm401-120h162v-60H480zm-319 0h147v-60H161zm260 150v-280z" />
  </svg>
);
export default SvgConveyorBelt;
