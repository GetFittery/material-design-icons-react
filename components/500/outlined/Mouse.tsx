import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M479.961-74.022q-120.591 0-203.265-82.663Q194.022-239.349 194.022-360v-260q0-120.576 82.659-203.397 82.66-82.821 203.251-82.821 120.592 0 203.439 82.821T766.218-620v260q0 120.651-82.833 203.315-82.832 82.663-203.424 82.663M510-620h187.848q0-79.849-52.283-142.229-52.282-62.38-135.565-73.619zm-247.848 0H450v-215.848q-83.283 11.239-135.565 73.619-52.283 62.38-52.283 142.229m217.591 477.848q90.3 0 154.203-63.721 63.902-63.72 63.902-154.127v-200H262.152v200q0 90.343 63.646 154.096 63.645 63.752 153.945 63.752M480-560" />
  </svg>
);
export default SvgMouse;
