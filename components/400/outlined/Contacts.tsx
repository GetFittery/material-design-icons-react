import * as React from "react";
import type { SVGProps } from "react";
const SvgContacts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M144-40v-60h672v60zm0-820v-60h672v60zm336 416q50 0 84-34t34-84q0-50-34-84t-84-34q-50 0-84 34t-34 84q0 50 34 84t84 34M132-160q-24 0-42-18t-18-42v-520q0-26 18-43t42-17h696q24 0 42 18t18 42v520q0 24-18 42t-42 18zm88-60q51-63 121-94.5T479.5-346q68.5 0 140 31.5T740-220h88v-520H132v520zm94 0h334q-31-30-72.5-48T480-286q-54 0-94.5 18T314-220m166.158-284Q456-504 439.5-521T423-562q0-24 16.342-41t40.5-17Q504-620 520.5-603t16.5 41q0 24-16.342 41t-40.5 17M480-480" />
  </svg>
);
export default SvgContacts;
