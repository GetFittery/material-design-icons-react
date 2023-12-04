import * as React from "react";
import type { SVGProps } from "react";
const SvgAddCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v299H140v281h399v60zm60-480h680v-100H140zM780-80v-120H660v-60h120v-120h60v120h120v60H840v120zM140-220v-520z" />
  </svg>
);
export default SvgAddCard;
