import * as React from "react";
import type { SVGProps } from "react";
const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600zm110-350h140v-140H290zm240 0h140v-140H530zM290-290h140v-140H290zm240 0h140v-140H530z" />
  </svg>
);
export default SvgDataset;
