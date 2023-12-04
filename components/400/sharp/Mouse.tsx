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
    <path d="M480-80q-118 0-199-81t-81-199v-260q0-118 81-199t199-81q118 0 199 81t81 199v260q0 118-81 199T480-80m30-540h190q0-81-53-144t-137-74zm-250 0h190v-218q-84 11-137 74t-53 144m219.788 480Q571-140 635.5-204.35 700-268.7 700-360v-200H260v200q0 91.3 64.288 155.65Q388.576-140 479.788-140M480-560" />
  </svg>
);
export default SvgMouse;
