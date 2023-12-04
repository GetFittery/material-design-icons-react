import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorbell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-270q13 0 23-8.5t12-21.5h-70q2 13 12 21.5t23 8.5m-155-50h310v-30h-40v-99q0-42.603-24-77.46-24-34.857-66-44.54v-39h-50v39q-42 9.683-66 44.54T365-449v99h-40zM154.022-114.022v-489.087L480-847.652l326.218 244.543v489.087zm68.13-68.13h515.696v-390.891L480-760.37 222.152-572.964zM480-475.761" />
  </svg>
);
export default SvgDoorbell;
