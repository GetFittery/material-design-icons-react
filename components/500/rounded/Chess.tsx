import * as React from "react";
import type { SVGProps } from "react";
const SvgChess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180.478-140.478h599.283v-112.826H180.478zm134.87-179.283h329.304l-23.476-167.13H338.87zM148.087-74.021q-14.424 0-24.245-9.821-9.82-9.821-9.82-24.245v-143.304q0-28.448 19.89-48.409 19.891-19.961 48.24-19.961h66.739l23.522-167.13H197.13q-13.915 0-23.512-9.653-9.596-9.653-9.596-23.652 0-14 9.596-23.576 9.597-9.576 23.512-9.576h565.74q14.017 0 23.682 9.701 9.666 9.702 9.666 23.772 0 14.071-9.666 23.527-9.665 9.457-23.682 9.457h-75.283l23.761 167.13h66.5q28.447 0 48.408 19.961 19.962 19.961 19.962 48.409v143.304q0 14.424-9.956 24.245-9.955 9.82-24.349 9.82H148.087Zm121.087-479.327-73.239-332.87q32.435 31.196 70.75 46.74 38.315 15.543 76.117 15.543 36.002 0 70.741-15.163 34.74-15.163 66.457-47.12 31.717 31.957 66.457 47.12 34.739 15.163 71.155 15.163 36.388 0 75.682-15.663 39.293-15.663 71.728-46.62l-73.957 332.87H622.37l45.521-211.087q-16 3-29.111 4.761-13.112 1.761-24.15 1.761-36.478.956-70.296-9.065Q510.516-777 480.01-797q-30.488 20-64.445 30.022-33.956 10.021-70.435 9.065-10.802 0-23.792-1.761-12.99-1.761-28.99-4.761l45.282 211.087zM480-140.478" />
  </svg>
);
export default SvgChess;