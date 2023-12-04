import * as React from "react";
import type { SVGProps } from "react";
const SvgIntegrationInstructions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m326-480 80-80q9-9 9-21.5t-8.609-21.5q-9.391-9-21.891-9-12.5 0-21.5 9L261-501q-9 9-9 21t9 21l102 102q9 9 21.5 9t21.891-9Q415-366 415-378t-9-21zm309 0-81 81q-9 9-9 21t8.609 21q9.391 9 21.891 9 12.5 0 21.5-9l103-102q9-9 9-21t-9-21L598-603q-9-9-21-9t-21.391 9Q547-594 547-581.5t9 21.5zM180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120zm0-60h600v-600H180zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797M180-180v-600z" />
  </svg>
);
export default SvgIntegrationInstructions;
