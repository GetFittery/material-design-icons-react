import * as React from "react";
import type { SVGProps } from "react";
const SvgMoving = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M817.848-610.304 616.63-410.087q-32.947 32.957-80.028 32.957-47.08 0-80.037-32.957l-47-47q-13.336-13.283-32.994-13.283t-32.941 13.283l-198 198q-10.02 9.957-22.944 9.957-12.925 0-22.882-9.837-9.956-9.837-9.956-22.913 0-13.077 9.956-23.033l197.761-198q32.948-32.957 80.028-32.957 47.081 0 80.037 32.957l46 46q14.044 14.043 33.308 14.043 19.265 0 33.627-14.043L771.022-657.37h-80.544q-14.028 0-23.329-9.286-9.301-9.287-9.301-23.294t9.301-23.344q9.301-9.336 23.329-9.336h158.565q14.645 0 24.475 9.695 9.83 9.696 9.83 24.37V-530q0 14.028-9.37 23.329t-23.5 9.301q-14.028 0-23.329-9.301T817.848-530z" />
  </svg>
);
export default SvgMoving;