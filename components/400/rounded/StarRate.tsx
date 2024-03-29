import * as React from "react";
import type { SVGProps } from "react";
const SvgStarRate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m343-243 137-104 137 104-55-173 126-82H537l-57-173-57 173H272l126 82zm137-25L307-136q-9 7-18 6t-17-6q-8-5-11.5-13.5T260-169l66-215-170-122q-9-6-11.5-15.5t.5-17.5q3-8 10-14.5t18-6.5h211l67-224q3-11 11.5-16.5T480-806q9 0 17.5 5.5T509-784l67 224h211q11 0 18 6.5t10 14.5q3 8 .5 17.5T804-506L634-384l66 215q3 11-.5 19.5T688-136q-8 5-17 6t-18-6zm0-189" />
  </svg>
);
export default SvgStarRate;
