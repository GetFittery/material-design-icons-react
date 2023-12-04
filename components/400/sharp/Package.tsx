import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m380-548 100-50 100 50v-232H380zM280-280v-80h200v80zM120-120v-720h720v720zm60-660v600zm0 600h600v-600H640v329l-160-80-160 80v-329H180z" />
  </svg>
);
export default SvgPackage;
