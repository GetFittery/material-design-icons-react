import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m219.022-656.913-88.827-87.826 48.74-48.74 87.826 88.827zM445.935-762.63v-125.74h68.13v125.74zm295.283 107.717-48.74-48.739 89.587-88.305 47.74 48.218zM351.869-69.717V-274.5l-120-120v-209.326H728.37V-394.5l-120 120v204.783zM420-137.848h120v-165.239l120-120v-114.761H300v114.761l120 120zm60-200" />
  </svg>
);
export default SvgHighlight;
