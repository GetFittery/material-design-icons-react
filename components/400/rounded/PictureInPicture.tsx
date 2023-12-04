import * as React from "react";
import type { SVGProps } from "react";
const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm336-223h275q12.75 0 21.375-8.625T781-473v-197q0-12.75-8.625-21.375T751-700H476q-12.75 0-21.375 8.625T446-670v197q0 12.75 8.625 21.375T476-443m30-60v-137h215v137z" />
  </svg>
);
export default SvgPictureInPicture;
