import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-180h150v-220q0-12.75 8.625-21.375T400-430h160q12.75 0 21.375 8.625T590-400v220h150v-390L480-765 220-570zm-60 0v-390q0-14.25 6.375-27T184-618l260-195q15.68-12 35.84-12Q500-825 516-813l260 195q11.25 8.25 17.625 21T800-570v390q0 24.75-17.625 42.375T740-120H560q-12.75 0-21.375-8.625T530-150v-220H430v220q0 12.75-8.625 21.375T400-120H220q-24.75 0-42.375-17.625T160-180m320-293" />
  </svg>
);
export default SvgHome;
