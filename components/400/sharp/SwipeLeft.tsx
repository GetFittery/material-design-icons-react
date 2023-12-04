import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-700v-180h40v93q81-64 174-98.5T490-920q134 0 237.5 57.5T880-700h-45q-51-88-140.5-134T490-880q-99.968 0-191.984 35.5T127-740h133v40zM424-80 184-320l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370zm63-290v-200h60v200zm126 0v-160h60v160zm-35 105" />
  </svg>
);
export default SvgSwipeLeft;
