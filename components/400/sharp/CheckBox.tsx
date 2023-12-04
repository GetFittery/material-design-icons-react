import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m419-321 289-289-43-43-246 246-119-119-43 43zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgCheckBox;
