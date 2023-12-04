import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 2H4v20h16zm-9 2h5v7l-2.5-1.5L11 11zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z" />
  </svg>
);
export default SvgPhotoAlbum;
