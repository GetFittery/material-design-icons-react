import * as React from "react";
import type { SVGProps } from "react";
const SvgRightClick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m490.565-231.869 20.674-68.501q64.957-11 108.174-61.217Q662.63-411.804 662.63-480q0-76.196-53.217-129.413Q556.196-662.63 480-662.63q-68.957 0-118.913 43.217Q311.13-576.196 300.37-511l-68.501 21.674q4.283-101.065 75.794-170.055Q379.174-728.37 480-728.37q103.587 0 175.978 72.392Q728.37-583.587 728.37-480q0 100.826-68.87 172.337t-168.935 75.794m-182 4.934-131.761 132q-17.478 17.479-40.434 17.098-22.957-.38-40.435-17.859-17.479-17.478-17.479-40.934 0-23.457 17.479-40.935l131-131-100.022-33.087q-12.435-4.478-11.935-17.033.5-12.554 12.935-16.032l321.5-96.326q9.196-2.24 16.533 5.097 7.337 7.337 5.097 16.533l-96.326 321.5q-3.478 12.435-16.032 12.935-12.555.5-17.033-11.935z" />
  </svg>
);
export default SvgRightClick;