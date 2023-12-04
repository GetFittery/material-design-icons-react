import * as React from "react";
import type { SVGProps } from "react";
const SvgInkPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m483.348-524.391 40.804 40.804L772.196-731.63l-40.805-40.566zM178.087-178.087h40.565l257.761-257.761-40.804-40.804-257.522 257.761zm367.261-236.804L414.891-545.348 612.174-742.63l-30.239-30.24-233.761 233.761-47.065-46.826 226.326-225.848q27.152-27.391 55.239-27.891 28.087-.5 56.239 27.891l21.326 20.848 44.522-44.283q12.196-12.434 27.75-12.434t27.989 12.434l73.718 73.718q12.195 12.196 12.195 28.87 0 16.673-12.195 28.869zM243.043-112.587H112.587v-130.456l302.304-302.305 130.457 130.457z" />
  </svg>
);
export default SvgInkPen;