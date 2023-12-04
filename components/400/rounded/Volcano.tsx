import * as React from "react";
import type { SVGProps } from "react";
const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M800-80H172q-32 0-50.5-27t-4.5-57l107-240q8-17 22.548-26.5Q261.095-440 279-440h81l65-162q7-17 22.077-27.5Q462.154-640 481-640h194q20.348 0 36.174 12T732-596l126 440q8 29-10 52.5T800-80m-628-60h628L675-580H480l-72 181q-3.784 8.36-11.351 13.68Q389.081-380 380-380H279zm371-670v-80q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T603-890v80q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T543-810m160 43 57-57q9-9 21-8.5t21 8.7q9 8.945 9 20.873Q811-791 802-782l-57 57q-9 8-21.1 8.5-12.1.5-20.9-8.5-9-9-9-21t9-21m-302 42-57-57q-9-9-8.5-21t8.7-21q8.945-9 20.873-9Q377-833 386-824l57 57q8 9 8.5 21.1.5 12.1-8.5 20.9-9 9-21 9t-21-9M172-140h628z" />
  </svg>
);
export default SvgVolcano;
