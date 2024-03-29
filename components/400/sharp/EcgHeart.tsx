import * as React from "react";
import type { SVGProps } from "react";
const SvgEcgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82zm166-365q-74.571 0-124.286 56.441Q140-667.118 140-590q0 20.717 4 40.859Q148-529 156-510h219l56 83 69-218h26l91 135h187.211q7.895-19.429 11.842-39.429Q820-569.429 820-590q0-77-49.946-133.5T645.189-780Q610-780 577.5-765.5 545-751 521-725l-30.761 33H469l-31-33q-24.273-25.816-56.636-40.408Q349-780 314-780m166 612 281-282H584.874L529-533l-70 217h-25l-91-134H198zm0-306" />
  </svg>
);
export default SvgEcgHeart;
