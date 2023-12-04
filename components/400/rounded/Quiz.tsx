import * as React from "react";
import type { SVGProps } from "react";
const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M543-340q16.595 0 28.798-12.202Q584-364.405 584-381t-12.202-28.798Q559.595-422 543-422t-28.798 12.202Q502-397.595 502-381t12.202 28.798Q526.405-340 543-340m-1-126q10 0 16.5-6.5T567-489q3-16 10.8-27.622Q585.6-528.243 606-548q28-27 38-45.951t10-44.561q0-46.098-31.5-75.293Q591-743 540.37-743q-32.761 0-59.566 15Q454-713 438-686q-5 8-1 17t14 14q9 4 18 .667 9-3.334 15-11.667 11-16 24.846-23.5T540-697q29 0 48 17t19 43q0 20-9 35t-32 32q-28 25-36.5 40T519-489q-1 9.2 5.845 16.1Q531.69-466 542-466M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zM140-80q-24 0-42-18t-18-42v-590q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T140-730v590h590q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q760-97 751.375-88.5T730-80zm120-740v560z" />
  </svg>
);
export default SvgQuiz;
