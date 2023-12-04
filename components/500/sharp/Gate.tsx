import * as React from "react";
import type { SVGProps } from "react";
const SvgGate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M67.326-272.826v-414.348h65.5v414.348zm125.5 82.152v-422.674q0-65.158 45.826-110.568 45.827-45.41 110.391-45.41h262.153q65.158 0 110.568 45.41t45.41 110.568v422.674zm634.348-82.152v-414.348h65.5v414.348zM258.326-256.174H447.37V-447.37h-82.392v-65.26h82.392v-191.196h-98.327q-37.478 0-64.097 26.239-26.62 26.239-26.62 64.239zm254.304 0h189.044v-357.174q0-38-26.239-64.239-26.239-26.239-64.239-26.239H512.63v191.196h82.392v65.26H512.63z" />
  </svg>
);
export default SvgGate;
