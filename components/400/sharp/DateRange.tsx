import * as React from "react";
import type { SVGProps } from "react";
const SvgDateRange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M306-394q-17 0-28.5-11.5T266-434q0-17 11.5-28.5T306-474q17 0 28.5 11.5T346-434q0 17-11.5 28.5T306-394m177 0q-17 0-28.5-11.5T443-434q0-17 11.5-28.5T483-474q17 0 28.5 11.5T523-434q0 17-11.5 28.5T483-394m170 0q-17 0-28.5-11.5T613-434q0-17 11.5-28.5T653-474q17 0 28.5 11.5T693-434q0 17-11.5 28.5T653-394M120-80v-740h125v-60h65v60h340v-60h65v60h125v740zm60-60h600v-430H180zm0-490h600v-130H180zm0 0v-130z" />
  </svg>
);
export default SvgDateRange;
