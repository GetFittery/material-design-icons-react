import * as React from "react";
import type { SVGProps } from "react";
const SvgVolcanoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M800-80H172q-32 0-50.5-27t-4.5-57l107-240q8-17 22.5-26.5T279-440h81l65-162q7-17 22-27.5t34-10.5h194q20 0 36 12t21 32l126 440q8 29-10 52.5T800-80M543-810v-80q0-13 8.5-21.5T573-920q13 0 21.5 8.5T603-890v80q0 13-8.5 21.5T573-780q-13 0-21.5-8.5T543-810m160 43 57-57q9-9 21-8.5t21 8.5q9 9 9 21t-9 21l-57 57q-9 8-21 8.5t-21-8.5q-9-9-9-21t9-21m-302 42-57-57q-9-9-8.5-21t8.5-21q9-9 21-9t21 9l57 57q8 9 8.5 21t-8.5 21q-9 9-21 9t-21-9" />
  </svg>
);
export default SvgVolcanoFill;
