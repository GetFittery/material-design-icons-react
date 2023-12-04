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
    <path d="M141-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180l139-139q9-9 21-9t21 9l139 139h180q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H141zm305-120-80-99q-5-6-12-6t-12 6l-70 95q-5 8-.75 16t12.75 8h400q9 0 13.5-8t-1.5-16L584-411q-5-6-12-6t-12 6zm254.118-190Q721-450 735.5-464.618q14.5-14.617 14.5-35.5Q750-521 735.382-535.5q-14.617-14.5-35.5-14.5Q679-550 664.5-535.382q-14.5 14.617-14.5 35.5Q650-479 664.618-464.5q14.617 14.5 35.5 14.5M387-720h188l-94-94zM141-140v-520z" />
  </svg>
);
export default SvgWallArt;
