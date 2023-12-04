import * as React from "react";
import type { SVGProps } from "react";
const SvgDragPanFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-69 311.261-237.739 361-287.478l84.935 84.695v-243.152H202.783L282.478-366l-49.739 49.739L68.999-480l164.74-164.739L283.478-595l-80.695 80.935h243.152v-243.391L366-677.522l-49.739-49.739L480-891l163.739 163.739L594-677.522l-79.935-79.934v243.391h243.391L677.522-594l49.739-49.739L891-480 727.261-316.261 677.522-366l79.934-79.935H514.065v243.152L599-287.478l49.739 49.739L480-68.999Z" />
  </svg>
);
export default SvgDragPanFill;
