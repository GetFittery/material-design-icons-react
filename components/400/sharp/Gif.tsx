import * as React from "react";
import type { SVGProps } from "react";
const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M468-360v-240h48v240zm-268 0v-240h192v48H248v144h96v-72h48v120zm388 0v-240h172v48H636v60h81v48h-81v84z" />
  </svg>
);
export default SvgGif;
