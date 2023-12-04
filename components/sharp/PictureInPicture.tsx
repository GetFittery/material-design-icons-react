import * as React from "react";
import type { SVGProps } from "react";
const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z" />
  </svg>
);
export default SvgPictureInPicture;
