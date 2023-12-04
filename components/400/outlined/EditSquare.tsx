import * as React from "react";
import type { SVGProps } from "react";
const SvgEditSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405l-60 60H180v600h600v-348l60-60v408q0 24-18 42t-42 18zm180-240v-170l382-382q9-9 20-13t22-4q11 0 22.317 4.5T827-911l83 84q8.609 8.958 13.304 19.782Q928-796.394 928-785.197q0 11.197-4.5 22.697T910-742L530-360zm508-425-84-84zM420-420h85l253-253-43-42-43-42-252 251zm295-295-43-42zl43 42z" />
  </svg>
);
export default SvgEditSquare;
