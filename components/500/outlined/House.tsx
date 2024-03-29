import * as React from "react";
import type { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M197.37-157.37v-320H72.826L480-843.587l197.37 174.369V-782.63h85.26v192.434l124.544 112.401H762.63v320.425H527.37v-238.565h-94.74v238.565zm65.26-65.26h104.74v-238.805h225.26v238.805h104.74v-337.174L480-757.174l-217.37 197.44zm104.74-238.805h225.26zm26.195-104.021h172.87q0-33.718-25.825-55.935-25.824-22.218-60.576-22.218-34.751 0-60.61 22.06t-25.859 56.093" />
  </svg>
);
export default SvgHouse;
