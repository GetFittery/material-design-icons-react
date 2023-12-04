import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-736h120v-64h160v64h120v411q-17 6-31.5 14.5T620-371v-385H340v616h213q5 17 12.5 31.5T584-80zm390 0-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83z" />
  </svg>
);
export default SvgBatteryError;
