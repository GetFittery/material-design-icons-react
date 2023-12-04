import * as React from "react";
import type { SVGProps } from "react";
const SvgDuo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880h340q23 0 41.5 18.5T880-820v340q0 83-31.5 156T763-197q-54 54-127 85.5T480-80m0-60q142.375 0 241.188-98.812Q820-337.625 820-480v-340H480q-142.375 0-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140M284-362h274v-87l126 87v-234l-126 87v-87H284zm196-118" />
  </svg>
);
export default SvgDuo;
