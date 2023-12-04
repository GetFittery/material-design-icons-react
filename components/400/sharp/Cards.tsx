import * as React from "react";
import type { SVGProps } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-500v-241h241v241zm0 281v-241h241v241zm280-281v-241h241v241zm0 281v-241h241v241zM280-560h121v-121H280zm280 0h121v-121H560zM280-279h121v-121H280zm280 0h121v-121H560zM120-120v-720h720v720zm60-60h600v-600H180z" />
  </svg>
);
export default SvgCards;
