import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h520v-680h-60v241q0 8-7.5 12.5t-15.5.5l-60-35q-7.097-4-14.548-4Q575-605 568-601l-60 35q-8 4-15-.5t-7-12.5v-241H220zm0 0v-680zm266-439q0 8 7 12.5t15 .5l60-35q7.097-4 14.548-4Q590-605 598-601l59 35q8 4 15.5-.5T680-579q0 9.391-7.5 13.696Q665-561 657-566l-60-34q-7.097-5-14.548-5Q575-605 568-600l-60 34q-8 5-15 .696-7-4.305-7-13.696" />
  </svg>
);
export default SvgBook;
