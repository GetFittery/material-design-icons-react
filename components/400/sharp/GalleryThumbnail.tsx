import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryThumbnail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-200v-560h560v560zm640-320v-240h240v240zm60-60h120v-120H740zM100-260h440v-440H100zm60-100h320L375-500l-75 100-55-73zm520 160v-240h240v240zm60-60h120v-120H740zm-640 0v-440zm640-320v-120zm0 320v-120z" />
  </svg>
);
export default SvgGalleryThumbnail;
