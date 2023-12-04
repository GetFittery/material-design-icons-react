import * as React from "react";
import type { SVGProps } from "react";
const SvgScore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm233-323 167 167 260-260v-244H180v510zm133-43v-240h50v240zm104 0-54-120 54-120h59l-53 113 53 127zm-317 0v-149h103v-41H273v-50h153v141H323v49h103v50zm80 128L175-180h605v-271L520-191zM180-180v-600z" />
  </svg>
);
export default SvgScore;
