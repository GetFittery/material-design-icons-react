import * as React from "react";
import type { SVGProps } from "react";
const SvgPriceChange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520zm184-54h60v-45h48q16 0 25.5-12t9.5-27v-114.745q0-16.255-9.5-27.755T432-512H297v-69h170v-60h-83v-45h-60v45h-48q-16 0-27.5 12T237-600.883v113.766Q237-471 248.5-461.5T276-452h131v73H237v60h87zm326-35 60-60H590zm-60-272h120l-60-60z" />
  </svg>
);
export default SvgPriceChange;
