import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffeeMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-800h640v60H693v100H329v-100H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60zm350.5-86q51.5 0 87-37.042Q633-240.083 633-293v-133H389v133q0 52.917 35 89.958Q459-166 510.5-166m-.5-394q16.575 0 27.787-11.213Q549-582.425 549-599t-11.213-27.787Q526.575-638 510-638t-27.788 11.213Q471-615.575 471-599t11.212 27.787Q493.425-560 510-560m1 134" />
  </svg>
);
export default SvgCoffeeMaker;
