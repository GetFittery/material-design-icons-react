import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicalInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M15 9c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2H4v11h16V9zm-4 7H9v2H7v-2H5v-2h2v-2h2v2h2zm6 1.5h-4V16h4zm2-3h-6V13h6z"
      opacity={0.3}
    />
    <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5zm-9-4H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z" />
  </svg>
);
export default SvgMedicalInformation;