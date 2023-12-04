import * as React from "react";
import type { SVGProps } from "react";
const SvgAdGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-260h560v-500H260zm-60 60v-680h680v680zM80-80v-680h60v620h620v60zm180-180v-560z" />
  </svg>
);
export default SvgAdGroup;
