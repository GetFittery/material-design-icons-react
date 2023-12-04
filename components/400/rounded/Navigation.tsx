import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-252 207-128q-9.75 5-18.375 2.5T174-133.887q-6-5.887-8.5-14.717-2.5-8.83 2.5-18.396l285-650q3.646-9 11.302-13.5t15.677-4.5q8.021 0 15.694 4.5T507-817l285 650q5 9.566 2.5 18.396t-8.5 14.717q-6 5.887-14.625 8.387Q762.75-123 753-128zm-222 34 222-98 222 98-222-514zm222-98" />
  </svg>
);
export default SvgNavigation;
