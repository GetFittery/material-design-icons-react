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
    <path d="M100-200q-24.75 0-42.375-17.625T40-260v-440q0-24.75 17.625-42.375T100-760h440q24.75 0 42.375 17.625T600-700v440q0 24.75-17.625 42.375T540-200zm620-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520zm20-60h120v-120H740zM100-260h440v-440H100zm60-100h320L375-500l-75 100-55-73zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200zm20-60h120v-120H740zm-640 0v-440zm640-320v-120zm0 320v-120z" />
  </svg>
);
export default SvgGalleryThumbnail;
