import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M886.218-737.848v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-515.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033m-744.066 106.37h675.696v-106.37H142.152zm0 129v280.326h675.696v-280.326zm0 280.326v-515.696z" />
  </svg>
);
export default SvgCreditCard;
