import * as React from "react";
import type { SVGProps } from "react";
const SvgLocalParking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-120v-720h288q98 0 165 67t67 165q0 98-67 165t-165 67H360v256zm120-376h168q48 0 80-32t32-80q0-48-32-80t-80-32H360z" />
  </svg>
);
export default SvgLocalParking;
