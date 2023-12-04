import * as React from "react";
import type { SVGProps } from "react";
const SvgManga = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm211-60-45-62q-6-8-6-18t6-18l61-83.67V-506q0-9.559 6-17.279Q379-531 388-534l99-32 61-85q6-8 15-11t18 0l99 33 140-47v-64H140v520zm74 0h395v-359l-27-23-113 35-96-31-60.305 82.624L427-484v101.876L367-300zm2-264" />
  </svg>
);
export default SvgManga;
