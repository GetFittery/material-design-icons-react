import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M0-400v-351l209-209 39 44-34 156h266v102L371-400zm60-60h270l90-209v-31H139l28-133L60-725zM751 0l-39-44 34-156H480v-102l109-258h371v351zm42-127 107-108v-265H630l-90 209v31h281zM60-460v-265zm840 225v-265z" />
  </svg>
);
export default SvgThumbsUpDown;
