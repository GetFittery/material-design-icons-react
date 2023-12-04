import * as React from "react";
import type { SVGProps } from "react";
const SvgContactPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400M320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44zM740-80H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h316q12.444 0 23.722 5T579-862l203 203q8 8 13 19.278 5 11.278 5 23.722v476q0 24-18 42t-42 18m0-60v-474L534-820H220v680zm-520 0v-680z" />
  </svg>
);
export default SvgContactPage;
