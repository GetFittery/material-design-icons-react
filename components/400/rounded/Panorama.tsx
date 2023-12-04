import * as React from "react";
import type { SVGProps } from "react";
const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm306-125-80-112q-5-6-12-6.5t-12 5.5l-87 114q-6 8-1.5 16t13.5 8h427q8.5 0 12.75-8t-.75-16L589-503q-5-6-12-6t-12 6zM140-220v-520z" />
  </svg>
);
export default SvgPanorama;
