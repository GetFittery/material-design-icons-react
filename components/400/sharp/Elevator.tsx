import * as React from "react";
import type { SVGProps } from "react";
const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-230h120v-170h40v-190H240v190h40zm60-394q23 0 39.5-16.5T396-680q0-23-16.5-39.5T340-736q-23 0-39.5 16.5T284-680q0 23 16.5 39.5T340-624m175 94h200L615-690zm100 260 100-160H515zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgElevator;
