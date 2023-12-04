import * as React from "react";
import type { SVGProps } from "react";
const SvgOutbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-136H634q-26 40-67.5 61.5T480-233q-45 0-86.5-21.5T326-316H180zm300-113q41 0 74-23.5t56-59.5h170v-404H180v404h170q23 36 56 59.5t74 23.5M180-180h600zm273-242v-189l-79 79-43-43 152-152 152 152-43 43-79-79v189z" />
  </svg>
);
export default SvgOutbox;
