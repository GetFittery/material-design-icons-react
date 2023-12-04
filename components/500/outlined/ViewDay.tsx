import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M111.152-148.521v-68.37h737.696v68.37zm0-594.827v-68.131h737.696v68.131zm68.37 418.326q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-173.696q0-27.697 20.336-48.033 20.336-20.337 48.034-20.337h600.956q27.698 0 48.034 20.337 20.336 20.336 20.336 48.033v173.696q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265zm0-68.13h600.956v-173.696H179.522zm0-173.696v173.696z" />
  </svg>
);
export default SvgViewDay;
