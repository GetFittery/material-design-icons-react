import * as React from "react";
import type { SVGProps } from "react";
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-70.175Q320-83 328.625-91.5T350-100h260q12.75 0 21.375 8.675Q640-82.649 640-69.825 640-57 631.375-48.5T610-40H350q-12.75 0-21.375-8.675Q320-57.351 320-70.175M280-160q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h400q24 0 42 18t18 42v640q0 24-18 42t-42 18zm0-120v60h400v-60zm0-60h400v-400H280zm0-460h400v-60H280zm0 0v-60zm0 520v60z" />
  </svg>
);
export default SvgDock;
