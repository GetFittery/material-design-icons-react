import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m561-539-42-42 119-119-118-117 42-42 118 117 119-119 42 42-119 119 119 119-42 42-119-119zM80-520l200-360 200 360zm201 400q-66 0-113-47t-47-113q0-67 47-113.5T281-440q66 0 113 47t47 113q0 66-47 113t-113 47m0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29m-99-400h196l-98-176zm338 460v-320h320v320zm60-60h200v-200H580zm100-100" />
  </svg>
);
export default SvgPlayShapes;
