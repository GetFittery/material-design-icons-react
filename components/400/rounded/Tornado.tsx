import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M144-840h672q35.25 0 52.125 30T868-750L532-170q-17.4 30-52.2 30-34.8 0-51.8-30L92-750q-17-30-.125-60T144-840m0 60 87 150h498l87-150zm122 210 81 140h266l81-140zm116 200 98 170 98-170z" />
  </svg>
);
export default SvgTornado;
