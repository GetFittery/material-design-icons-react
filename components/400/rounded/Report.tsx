import * as React from "react";
import type { SVGProps } from "react";
const SvgReport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-281q14 0 24.5-10.5T515-316q0-14-10.5-24.5T480-351q-14 0-24.5 10.5T445-316q0 14 10.5 24.5T480-281m0-144q13 0 21.5-8.5T510-455v-203q0-13-8.5-21.5T480-688q-13 0-21.5 8.5T450-658v203q0 13 8.5 21.5T480-425M355-120q-12 0-23.5-5T312-138L138-312q-8-8-13-19.5t-5-23.5v-250q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h250q12 0 23.5 5t19.5 13l174 174q8 8 13 19.5t5 23.5v250q0 12-5 23.5T822-312L648-138q-8 8-19.5 13t-23.5 5zm0-60h250l175-175v-250L605-780H355L180-605v250zm125-300" />
  </svg>
);
export default SvgReport;
