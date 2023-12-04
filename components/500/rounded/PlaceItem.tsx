import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M178.565-111.869q-28.349 0-48.24-19.891-19.89-19.891-19.89-48.24v-438.565q0-28.448 19.89-48.409 19.891-19.961 48.24-19.961h173.304q14.424 0 24.245 10.012 9.821 10.011 9.821 24.489 0 14.477-9.821 24.173-9.821 9.696-24.245 9.696H178.565V-180h602.87v-438.565H608.37q-14.663 0-24.484-9.871-9.821-9.871-9.821-24.349t9.821-24.314q9.821-9.836 24.484-9.836h173.065q28.447 0 48.409 19.961 19.961 19.961 19.961 48.409V-180q0 28.349-19.961 48.24-19.962 19.891-48.409 19.891zm335.5-332.631 65.131-65.13q9.695-10.196 24.239-10.316 14.543-.119 24.479 9.963 10.217 10.351 10.217 24.504t-10.196 24.349L504.109-337.304q-10.283 10.435-24.152 10.435-13.87 0-24.066-10.435L332.065-461.13q-10.196-10.196-9.696-24.37.5-14.174 10.696-24.37 10.196-10.195 24.37-10.195 14.174 0 24.369 10.195l64.131 65.37v-481.435q0-14.424 9.871-24.244Q465.677-960 480.175-960q14.499 0 24.195 9.821 9.695 9.82 9.695 24.244z" />
  </svg>
);
export default SvgPlaceItem;
