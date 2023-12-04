import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M451-522v165q0 12.325 9 20.663Q469-328 481.228-328q12.228 0 20.5-9T510-358v-164l58 59q9 9.167 21 9.583 12 .417 21-8.636 9-9.052 9-21.5Q619-496 610-505L500-615q-9-9-21-9t-21 9L348-505q-9 9-8.5 21t9.5 21.391Q358-454 370.5-454t21.5-9zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgPresentToAll;
