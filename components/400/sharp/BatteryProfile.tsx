import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-736h120v-64h160v64h120v282q-16 0-31 2t-29 6v-230H340v616h129q11 17 24 32t29 28zm375 0-5-48q-20-6-41-17.5T575-171l-42 20-35-54 38-30q-5-23-5-41.5t5-41.5l-38-30 35-55 42 20q13-12 34-24t41-18l5-49h60l6 49q20 6 41 18t34 24l42-20 35 55-38 30q5 23 5 41.5t-5 41.5l38 30-35 54-42-20q-13 14-34 25.5T721-128l-6 48zm30-95q44 0 73-29t29-73q0-44-29-73t-73-29q-44 0-73 29t-29 73q0 44 29 73t73 29" />
  </svg>
);
export default SvgBatteryProfile;
