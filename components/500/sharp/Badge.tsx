import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M232-244.848h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5t-48.5 13.5q-15 5-24 19t-9 32zm336-67h170v-50H568zm-214-50q22.5 0 38.25-15.75t15.75-38.25q0-22.5-15.75-38.25T354-469.848q-22.5 0-38.25 15.75T300-415.848q0 22.5 15.75 38.25t38.25 15.75m214-63h170v-50H568zM74.022-74.022v-612.196h310v-200h192.196v200h310v612.196zm68.13-68.13h675.696v-475.696H575.739v90H384.261v-90H142.152zm308.326-452.152h59.283v-225.457h-59.283zM480-380" />
  </svg>
);
export default SvgBadge;
