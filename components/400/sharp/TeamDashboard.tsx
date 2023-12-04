import * as React from "react";
import type { SVGProps } from "react";
const SvgTeamDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm290-60v-270H180v270zm60 0h310v-270H470zM180-510h600v-270H180z" />
  </svg>
);
export default SvgTeamDashboard;
