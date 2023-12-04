import * as React from "react";
import type { SVGProps } from "react";
const SvgOpacity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120q-133 0-226.5-90.5T160-434q0-66 25.5-123T255-658l193-191q7-7 15.5-10t16.5-3q8 0 16.5 3t15.5 10l193 191q44 44 69.5 101T800-434q0 133-93.5 223.5T480-120M223-400h514q13-69-15-127t-56-85L480-795 294-612q-28 27-56 85t-15 127" />
  </svg>
);
export default SvgOpacity;
