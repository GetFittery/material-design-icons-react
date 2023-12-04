import * as React from "react";
import type { SVGProps } from "react";
const SvgAllInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-260h560v-163H676q-18 40-54.5 63.5T540-336q-45 0-81-23.5T404-423H260zm280-136q31 0 55.5-17.5T627-460q2-11 10.25-17t18.75-6h164v-337H260v337h164q10.5 0 18.75 6T453-460q7 29 32 46.5t55 17.5M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-590q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T140-730v590h590q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q760-97 751.375-88.5T730-80zm120-180h560z" />
  </svg>
);
export default SvgAllInbox;
