import * as React from "react";
import type { SVGProps } from "react";
const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 7h-8v6h8zm-2 4h-4V9h4zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z" />
  </svg>
);
export default SvgPictureInPicture;
