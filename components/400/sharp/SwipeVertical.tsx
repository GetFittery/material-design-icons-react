import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-40h93q-62-78-97.5-169T40-480q0-100 35.5-191T173-840H80v-40h180v180h-40v-133q-65 75-102.5 164.5T80-480q0 99 37.5 188.5T220-127v-133h40v180zm215-174 18-68 141-11-127-347 57-22 154 423-128 12 196 91 273-99-106-291 57-22 125 348-351 129zm268-151-68-188 56-20 68 188zm118-43-54-150 56-21 55 151zm-7 105" />
  </svg>
);
export default SvgSwipeVertical;
