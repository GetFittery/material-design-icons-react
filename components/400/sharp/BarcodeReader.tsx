import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcodeReader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h449L569-520H439l-13 50h44v140h-82l-32 122q-11 39-43 63.5T240-120m0-60q20 0 36-12t21-32l81-296H253l-71 265q-8 29 10 52t48 23m525-593-17-36 127-58 16 37zm110 280-127-57 17-37 126 58zM770-660v-40h140v40zm-490 80h252l100-200H280q-42 0-71 29t-29 71q0 42 29 71t71 29m126-100" />
  </svg>
);
export default SvgBarcodeReader;
