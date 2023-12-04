import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-69 311.261-237.739 361-287.478l84.935 84.695v-182.782h68.13v182.782L599-287.478l49.739 49.739L480-68.999ZM232.739-316.26 68.999-480l164.74-164.739L283.478-595l-80.695 80.935h182.782v68.13H202.783L282.478-366l-49.739 49.739Zm494.522 0L677.522-366l79.934-79.935H575.435v-68.13h182.021L677.522-594l49.739-49.739L891-480 727.261-316.261ZM445.935-575.435v-182.021L366-677.522l-49.739-49.739L480-891l163.739 163.739L594-677.522l-79.935-79.934v182.021z" />
  </svg>
);
export default SvgOpenWithFill;
