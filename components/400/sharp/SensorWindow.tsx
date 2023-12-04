import * as React from "react";
import type { SVGProps } from "react";
const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-800h640v800zm60-430h190v-40h140v40h190v-310H220zm0 60v310h520v-310zm0 310h520z" />
  </svg>
);
export default SvgSensorWindow;
