import * as React from "react";
import type { SVGProps } from "react";
const SvgWeatherMix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M499.55-29.717q-20.985 0-36.463-14.98-15.478-14.98-15.478-35.958 0-10.13 3.739-19.03 3.739-8.902 10.978-16.141l37.196-34.196 37.195 34.196q7 7.239 10.74 16.331 3.739 9.092 3.739 19.01 0 20.811-15.331 35.79-15.33 14.978-36.315 14.978m-142.224-67.87-39.783-39.543 115.783-115.783 39.304 39.783zm266.022-57-57.305-57.543 57.305-57.544 57.543 57.544zm-370.522 0-57.544-57.543 57.544-57.544 57.544 57.544zM290-338.565q-88.422 0-151.244-62.835-62.821-62.835-62.821-151.065 0-80.361 56.858-143.318 56.859-62.956 141.577-69.674 32.802-56 85.993-88.739 53.19-32.739 120.004-32.739 91.111 0 153.448 57.62 62.337 57.619 77.533 142.858 79.717 4.957 126.217 55.407 46.5 50.449 46.5 117.926 0 72.167-50.769 123.363T710-338.565zm0-68.37h420q44.493 0 75.214-31.127 30.721-31.128 30.721-75.011 0-43.884-30.721-74.688-30.721-30.804-75.214-30.804h-64.065v-34.065q0-69.324-48.301-117.629-48.3-48.306-117.403-48.306-50.217 0-91.588 26.857-41.372 26.857-60.817 72.512l-9.025 20.631h-30.562q-60.419 1.941-102.297 44.134-41.877 42.194-41.877 101.578 0 60.327 42.677 103.122Q229.418-406.935 290-406.935M480-612.63" />
  </svg>
);
export default SvgWeatherMix;