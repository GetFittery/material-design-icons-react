import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshotKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.5-390q-37.5 0-64-26.438Q390-442.875 390-480q0-38 26.438-64 26.437-26 63.562-26 38 0 64 26t26 63.5q0 37.5-26 64T480.5-390m-.5 60q63 0 106.5-43.5T630-480q0-63-43.5-106.5T480-630q-63 0-106.5 43.5T330-480q0 63 43.5 106.5T480-330M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgScreenshotKeyboard;
