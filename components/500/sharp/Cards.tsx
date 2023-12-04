import * as React from "react";
import type { SVGProps } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M222.152-500v-238.848H461V-500zm0 278.848V-460H461v238.848zM500-500v-238.848h238.848V-500zm0 278.848V-460h238.848v238.848zM282.152-560H401v-118.848H282.152zM560-560h118.848v-118.848H560zM282.152-281.152H401V-400H282.152zm277.848 0h118.848V-400H560zm-445.978 167.13v-732.196h732.196v732.196zm68.13-68.13h595.696v-595.696H182.152z" />
  </svg>
);
export default SvgCards;
