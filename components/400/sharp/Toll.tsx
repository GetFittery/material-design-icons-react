import * as React from "react";
import type { SVGProps } from "react";
const SvgToll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93m-306-12q-113-14-183.5-103.5T40-480q0-115 70.5-204.5T294-788v58q-88 16-141 87.5T100-480q0 91 53 162.5T294-230zm306-48q107 0 183.5-76.5T860-480q0-107-76.5-183.5T600-740q-107 0-183.5 76.5T340-480q0 107 76.5 183.5T600-220" />
  </svg>
);
export default SvgToll;
