import * as React from "react";
import type { SVGProps } from "react";
const SvgWineBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-180v-185q-99-14-154.5-79.703Q240-510.405 240-600v-210q0-12.75 8.625-21.375T270-840h420q12.75 0 21.375 8.625T720-810v210q0 89.595-55.5 155.297Q609-379 510-365v185h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T610-120H350q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T350-180zm29.857-240Q549-420 600.5-467.5T658-570H302q5 55 56.857 102.5t121 47.5M300-630h360v-150H300zm180 210" />
  </svg>
);
export default SvgWineBar;
