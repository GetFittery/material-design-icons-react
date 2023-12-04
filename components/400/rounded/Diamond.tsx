import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-154q-13 0-25-5t-21-16L105-570q-7-8-10.5-17.5T91-608q0-7 2-13.5t5-13.5l85-172q8-15 22.5-24t31.5-9h486q17 0 31.5 9t22.5 24l85 172q3 7 5 13.5t2 13.5q0 11-3.5 20.5T855-570L526-175q-9 11-21 16t-25 5M368-630h224l-75-150h-74zm82 381v-321H183zm60 0 267-321H510zm149-381h136l-75-150H584zm-494 0h136l75-150H240z" />
  </svg>
);
export default SvgDiamond;
