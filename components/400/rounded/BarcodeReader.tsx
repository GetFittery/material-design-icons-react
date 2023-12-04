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
    <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h352q34 0 51.5 28.5T686-753L586-553q-8 15-22.5 24t-31.5 9h-93l-13 50h14q13 0 21.5 8.5T470-440v80q0 13-8.5 21.5T440-330h-52l-32 122q-11 39-43 63.5T240-120m0-60q20 0 36-12t21-32l81-296H253l-71 265q-8 29 10 52t48 23m40-400h252l100-200H280q-42 0-71 29t-29 71q0 42 29 71t71 29m593-242-90 41q-8 3-15 .5T757-791q-4-8-1.5-15t10.5-11l91-41q8-4 15.5-1t10.5 11q3 8 .5 15T873-822M766-542q-8-3-10.5-10.5t.5-15.5q3-8 11-11t16 1l90 41q8 3 10.5 10.5T883-511q-3 8-10.5 10.5T857-501zm124-118H790q-8 0-14-6t-6-14q0-8 6-14t14-6h100q8 0 14 6t6 14q0 8-6 14t-14 6M316-520" />
  </svg>
);
export default SvgBarcodeReader;