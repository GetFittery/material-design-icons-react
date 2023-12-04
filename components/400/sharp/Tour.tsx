import * as React from "react";
import type { SVGProps } from "react";
const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-80v-800h60v84h580l-81 193 81 193H260v330zm60-656v266zm241.212 205Q531-531 552-552.212q21-21.213 21-51Q573-633 551.788-654q-21.213-21-51-21Q471-675 450-653.788q-21 21.213-21 51Q429-573 450.212-552q21.213 21 51 21M260-470h491l-55-133 55-133H260z" />
  </svg>
);
export default SvgTour;
