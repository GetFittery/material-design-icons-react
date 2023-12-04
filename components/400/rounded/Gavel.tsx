import * as React from "react";
import type { SVGProps } from "react";
const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M190-180h420q13 0 21.5 8.5T640-150q0 13-8.5 21.5T610-120H190q-13 0-21.5-8.5T160-150q0-13 8.5-21.5T190-180m150-194L202-512q-17-17-17.5-41.5T201-596l29-30 224 222-30 30q-17 17-42 17t-42-17m296-212L414-810l30-29q18-17 42.5-16.5T528-838l138 138q17 17 17 42t-17 42zm181 405L302-696l42-42 515 515q9 9 9 21t-9 21q-9 9-21 9t-21-9" />
  </svg>
);
export default SvgGavel;
