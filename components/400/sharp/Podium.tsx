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
    <path d="M490-790q0 29-20.5 49.5T420-720q-13 0-24.5-4.5T374-737q-27 16-45 41t-19 56h530l-40 280H626v-60h125l23-160H186l23 160h125v60H160l-40-280h130q1-49 28.5-89t71.5-63q1-29 21-48.5t49-19.5q29 0 49.5 20.5T490-790M374-180h212l28-280H346zm-54 60-39-400h398l-39 400z" />
  </svg>
);
export default SvgPodium;
