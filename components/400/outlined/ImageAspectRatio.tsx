import * as React from "react";
import type { SVGProps } from "react";
const SvgImageAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M241-499h60v-60h-60zm170 0h60v-60h-60zm168 175h60v-60h-60zm0-175h60v-60h-60zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgImageAspectRatio;
