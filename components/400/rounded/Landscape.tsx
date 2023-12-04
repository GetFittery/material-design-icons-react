import * as React from "react";
import type { SVGProps } from "react";
const SvgLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M100-240q-19 0-27-16.5t3-31.5l180-240q5-6 11-9t13-3q7 0 13 3t11 9l171 228h325L560-619 435-453l-38-50 139-185q5-6 11-9t13-3q7 0 13 3t11 9l300 400q11 15 3 31.5T860-240zm335-60h365-334 51zm-275 0h240L280-460zm0 0h240z" />
  </svg>
);
export default SvgLandscape;
