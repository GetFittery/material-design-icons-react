import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-548.609 364.456-664.913v-222.978h232.088v222.978zm184.913 184.153L548.609-480l116.304-116.544h222.978v232.088zm-592.804 0v-232.088h222.978L411.63-480 295.087-364.456zM364.456-72.108v-222.979L480-411.63l116.544 116.543v222.978zM480-639.262l51.043-50.827V-822.63H430.196v132.565zM137.609-430.196h133.326L321.739-480l-50.762-51.043H137.609zm292.587 292.587h100.847v-133.326L480-321.739l-49.804 50.762zm259.892-292.587H822.63v-100.847H690.065L639.261-480z" />
  </svg>
);
export default SvgGamepad;
