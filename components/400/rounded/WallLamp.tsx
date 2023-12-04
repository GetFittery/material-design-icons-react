import * as React from "react";
import type { SVGProps } from "react";
const SvgWallLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M149.825-120Q137-120 128.5-128.625T120-150v-180q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180-330v180q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625M307-500h426l-84-280H391zm0 0h426zm-57 290q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T250-270h190q21.25 0 35.625-14.375T490-320v-120H266q-15 0-24-12.5t-4-26.5l102-340q3-10 10.353-15.5T368-840h304q10.294 0 17.647 5.5Q697-829 700-819l102 340q5 14-4 26.5T774-440H550v120q0 45.833-32.083 77.917Q485.833-210 440-210z" />
  </svg>
);
export default SvgWallLamp;
