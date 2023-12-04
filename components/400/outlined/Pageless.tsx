import * as React from "react";
import type { SVGProps } from "react";
const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M410-80H100q-24.75 0-42.375-17.625T40-140v-270h60v270h310zm140 0v-60h310v-270h60v270q0 24.75-17.625 42.375T860-80zM40-550v-270q0-24.75 17.625-42.375T100-880h310v60H100v270zm820 0v-270H550v-60h310q24.75 0 42.375 17.625T920-820v270z" />
  </svg>
);
export default SvgPageless;
