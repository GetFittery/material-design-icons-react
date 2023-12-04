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
    <path d="m483.348-524.391 40.804 40.804L772.196-731.63l-40.805-40.566zM178.087-178.087h40.565l257.761-257.761-40.804-40.804-257.522 257.761zm367.261-236.804L414.891-545.348 612.174-742.63l-30.239-30.24-233.761 233.761-47.065-46.826 281.587-281.587 77.543 76.587 72.391-72.152L863.087-732.63zM243.043-112.587H112.587v-130.456l302.304-302.305 130.457 130.457z" />
  </svg>
);
export default SvgInkPen;
