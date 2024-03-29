import * as React from "react";
import type { SVGProps } from "react";
const SvgPrintConnect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-588h680zm102 468v-176H80v-246q0-45.05 30.5-75.525Q141-648 186-648h588q45.05 0 75.525 30.475Q880-587.05 880-542v87q-14-9-28.5-15.5T820-482v-60q0-19.55-13.225-32.775Q793.55-588 774-588H186q-19.55 0-32.775 13.225Q140-561.55 140-542v186h102v-76h376q-14.095 12.825-25.548 27.912Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28zm476-47-100-99 43-42 57 56 141-141 43 42zm-60-481v-132H302v132h-60v-192h476v192z" />
  </svg>
);
export default SvgPrintConnect;
