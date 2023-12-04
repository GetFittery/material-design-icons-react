import * as React from "react";
import type { SVGProps } from "react";
const SvgStyler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-74.022v-248.282h-71.957q-38.092 0-66.057-26.174-27.964-26.174-27.964-64.565 0-29.015 14.687-53.915t41.617-36.586l278.13-118.804v-40.007q-37-9.841-60.141-40.46-23.141-30.62-23.141-69.098 0-47.794 34.016-81.049 34.016-33.256 81.81-33.256 47.794 0 81.929 33.256 34.136 33.255 34.136 81.049h-65.261q0-20.283-15.162-34.424-15.162-14.141-35.663-14.141-20.501 0-35.642 14.114-15.141 14.114-15.141 34.543 0 22.43 15.258 37.691 15.257 15.26 37.426 15.26 13.304 0 23.027 9.257 9.723 9.256 9.723 22.374v63.935l274.283 119.76q26.616 11.702 41.46 36.627 14.845 24.924 14.845 53.967 0 38.278-28.035 64.462-28.034 26.184-66.226 26.184h-71.718v248.282zm-72.004-314.021H280v-49.566h400.239v49.566h71.647q11.071 0 20.071-7.277 9-7.276 9-18.404 0-9.08-4.881-16.147-4.88-7.066-13.119-11.172L483-567.283 197.065-441.051q-7.782 4.008-12.782 11.127-5 7.12-5 15.2 0 11.128 8.486 18.904 8.487 7.777 20.227 7.777m137.265 248.521h269.478v-232.826H345.261zm0-232.826h269.478z" />
  </svg>
);
export default SvgStyler;
