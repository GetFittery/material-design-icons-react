import * as React from "react";
import type { SVGProps } from "react";
const SvgDrafts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m511-902 340 204q17 9 23 24.5t6 30.5v463q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-463q0-15 6.5-30.5T109-698l340-204q14.476-8 31.238-8T511-902m-31 448 336-197-336-202-336 202zm-30 49L140-587v407h680v-407L510-405q-13.873 8-29.937 8Q464-397 450-405m60 225h310-680z" />
  </svg>
);
export default SvgDrafts;
