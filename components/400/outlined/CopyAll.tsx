import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-240v-60h60v60zm0-160v-60h60v60zm0-160v-60h60v60zM280-80v-60h60v60zm60-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h400q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h400v-520H340zM440-80v-60h60v60zm-260 0q-24.75 0-42.375-17.625T120-140h60zm420 0v-60h60q0 25-17.625 42.5T600-80M120-720q0-24.75 17.625-42.375T180-780v60zm420 160" />
  </svg>
);
export default SvgCopyAll;
