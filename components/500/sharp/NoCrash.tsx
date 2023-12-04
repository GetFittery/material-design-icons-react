import * as React from "react";
import type { SVGProps } from "react";
const SvgNoCrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-726.478-111.5-110.5 47.739-48.979 63.761 64 144.5-144.261 47.978 47.74zM114.022 5.5v-361.174l96.674-291.022h538.658l96.864 290.917V5.501h-86.696v-84H200.478v84zm91.608-419.978h548.979l-54.283-163.848H259.674zm-23.478 60v207.848zM286.96-195.674q22.997 0 38.616-15.75 15.62-15.75 15.62-38.25 0-23.333-15.87-39.667-15.869-16.333-38.13-16.333-23.573 0-39.787 16.265-16.213 16.264-16.213 39.5 0 23.235 16.145 38.735t39.619 15.5m387.083 0q23.334 0 39.667-15.75 16.333-15.75 16.333-38.25 0-23.333-16.264-39.667-16.265-16.333-39.5-16.333-23.236 0-38.736 16.265-15.5 16.264-15.5 39.5 0 23.235 15.75 38.735t38.25 15.5M182.152-146.63h595.696v-207.848H182.152z" />
  </svg>
);
export default SvgNoCrash;
