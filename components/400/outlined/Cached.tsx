import * as React from "react";
import type { SVGProps } from "react";
const SvgCached = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M481-158q-131 0-225.5-94.5T161-478v-45l-80 80-39-39 149-149 149 149-39 39-80-80v45q0 107 76.5 183.5T481-218q29 0 55-5t49-15l43 43q-36 20-72.5 28.5T481-158m289-169L621-476l40-40 79 79v-41q0-107-76.5-183.5T480-738q-29 0-55 5.5T376-719l-43-43q36-20 72.5-28t74.5-8q131 0 225.5 94.5T800-478v43l80-80 39 39z" />
  </svg>
);
export default SvgCached;
