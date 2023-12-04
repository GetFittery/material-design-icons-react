import * as React from "react";
import type { SVGProps } from "react";
const SvgChair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M163-120v-72H40v-458h104v-190h672v190h104v458H797v72h-60v-72H223v72zm-63-132h760v-338h-88v220H188v-220h-88zm148-178h464v-220h44v-130H204v130h44zm232 60" />
  </svg>
);
export default SvgChair;
