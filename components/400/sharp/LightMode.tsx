import * as React from "react";
import type { SVGProps } from "react";
const SvgLightMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41m0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280M200-450H40v-60h160zm720 0H760v-60h160zM450-760v-160h60v160zm0 720v-160h60v160zM262-658l-100-97 43-44 96 100zm494 496-98-100 41-41 99 98zm-99-537 98-99 44 42-99 98zM162-205l99-98 42 42-98 99zm318-275" />
  </svg>
);
export default SvgLightMode;
