import * as React from "react";
import type { SVGProps } from "react";
const SvgPodium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M490-790q0 29-20.5 49.5T420-720q-13 0-24.5-4.5T374-737q-27 16-45 41t-19 56h495q14 0 23 10t7 24l-31 220q-2 11-10.5 18.5T774-360H626v-60h125q6-40 11.5-80t11.5-80H186q6 40 11.5 80t11.5 80h125v60H186q-11 0-19.5-7.5T156-386l-31-220q-2-14 7-24t23-10h95q1-49 28.5-89t71.5-63q1-29 21-48.5t49-19.5q29 0 49.5 20.5T490-790M374-180h212l28-280H346zm239 60H347q-11 0-20-8t-10-19l-30-307q-2-26 16-46t44-20h266q26 0 44 20t16 46l-30 307q-1 11-10 19t-20 8" />
  </svg>
);
export default SvgPodium;
