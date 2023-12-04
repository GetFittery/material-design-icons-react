import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-245h330v245zm390 0v-415h330v415zM120-425v-415h330v415zm390-170v-245h330v245zM180-180h210v-125H180zm390 0h210v-295H570zM180-485h210v-295H180zm390-170h210v-125H570z" />
  </svg>
);
export default SvgBrowse;
