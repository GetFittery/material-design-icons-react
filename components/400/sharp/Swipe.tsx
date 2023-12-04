import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M880-700H700v-40h133q-75-65-164.5-102.5T480-880q-99 0-188.5 37.5T127-740h133v40H80v-180h40v93q78-62 169-97.5T480-920q100 0 191 35.5T840-787v-93h40zM424-80 184-320l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370zm63-290v-200h60v200zm126 0v-160h60v160zm-35 105" />
  </svg>
);
export default SvgSwipe;
