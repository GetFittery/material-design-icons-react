import * as React from "react";
import type { SVGProps } from "react";
const SvgYourTrips = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M310-200h340v-60H310zM260-80q-24 0-42-18t-18-42v-350q0-88 49-158.5T375-751v-19q0-44 30.676-77 30.677-33 74.5-33Q524-880 554.5-847t30.5 77v19q77 32 126 102.5T760-490v350q0 24-18 42t-42 18zm0-60h440v-350.174Q700-581 635.712-645.5t-155.5-64.5Q389-710 324.5-645.65 260-581.3 260-490zm175-628q5-1 20.5-1.5t24.5-.5q9 0 24.5.5T525-768v-2q0-20-12.5-35T480-820q-20 0-32.5 15T435-770zM260-140h440zm146-250 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53z" />
  </svg>
);
export default SvgYourTrips;
