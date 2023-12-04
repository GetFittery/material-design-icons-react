import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditScore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-640h680v-100H140zM80-740q0-24 18-42t42-18h680q24 0 42 18t18 42v239H140v281h203q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T343-160H140q-24 0-42-18t-18-42zm60 0v520-120 89zm458 574 218-218q9.067-9 21.533-8.5Q850-392 859-383q8.25 9 8.625 21T859-341L619-101q-9 9-21 9t-21-9L449-229q-9-9-8.5-21.5t9.714-21.891Q458.661-281 471.33-281q12.67 0 21.67 9z" />
  </svg>
);
export default SvgCreditScore;
