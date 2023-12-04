import * as React from "react";
import type { SVGProps } from "react";
const SvgPottedPlant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M317-140h326l48-190H269zm-47 60-63-250h546L690-80zm-90-310h600v-100H180zm301-251q0-87 75-160.5T719-880q-3 81-67 150.5T510-645v95h330v220H120v-220h330v-95q-78-15-141.5-84.5T241-880q88 5 164 78t76 161" />
  </svg>
);
export default SvgPottedPlant;
