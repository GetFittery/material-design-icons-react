import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M314.022-254.652v-456.696q0-15.913 10.279-25.109 10.279-9.195 23.906-9.195 4.303 0 9.053 1.119 4.751 1.12 9.189 3.581l359.29 229.604q7.837 5.478 11.875 12.435 4.038 6.956 4.038 15.913t-4.038 15.913q-4.038 6.957-11.875 12.435l-359.29 229.604q-4.472 2.461-9.266 3.461-4.793 1-9.108 1-13.662 0-23.858-9.022-10.195-9.022-10.195-25.043M382.152-316.065 644.935-483 382.152-649.935z" />
  </svg>
);
export default SvgPlayArrow;
