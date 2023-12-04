import * as React from "react";
import type { SVGProps } from "react";
const SvgWysiwyg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.5-114.5v-731h731v731zM180-180h600v-520H180zm100-310v-60h390v60zm0 160v-60h230v60z" />
  </svg>
);
export default SvgWysiwyg;
