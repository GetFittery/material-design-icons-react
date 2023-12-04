import * as React from "react";
import type { SVGProps } from "react";
const SvgBuild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M730-103 447-388q-23 8-46 13t-47 5q-97.083 0-165.042-67.667Q121-505.333 121-602q0-31 8.158-60.388Q137.316-691.777 152-718l145 145 92-86-149-149q25.915-15.158 54.957-23.579Q324-840 354-840q99.167 0 168.583 69.417Q592-701.167 592-602q0 24-5 47t-13 46l287 286zm3-82 40-40-273-273q16-21 24-49.5t8-54.5q0-75-55.5-127T350-782l123 126-177 166-118-117q3 77 54.668 127T354-430q25 0 53-8t49-24zM476-484" />
  </svg>
);
export default SvgBuild;
