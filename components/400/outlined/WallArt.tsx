import * as React from "react";
import type { SVGProps } from "react";
const SvgWallArt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M141-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180l160-160 160 160h180q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H141zm113-100h460L572-427 446-260l-92-114zm446.118-210Q721-450 735.5-464.618q14.5-14.617 14.5-35.5Q750-521 735.382-535.5q-14.617-14.5-35.5-14.5Q679-550 664.5-535.382q-14.5 14.617-14.5 35.5Q650-479 664.618-464.5q14.617 14.5 35.5 14.5M387-720h188l-94-94zM141-140v-520z" />
  </svg>
);
export default SvgWallArt;
