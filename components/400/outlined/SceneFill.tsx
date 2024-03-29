import * as React from "react";
import type { SVGProps } from "react";
const SvgSceneFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M820-80v-610q0-38-26-64t-64-26h-50v62q0 7.714-5.143 12.857Q669.714-700 662-700H438q-10 0-14.5-11t-.5-19l76-164q5-12 16.4-19 11.4-7 26.6-7h92q19.714 0 32.857 15T680-870v30h50q63 0 106.5 43.5T880-690v610zm-630 0q-46.75 0-78.375-31.625T80-190v-98q0-25 17.5-42.5T140-348q25 0 42.5 17.5T200-288v88h380v-90q0-25 17.5-42.5T640-350q25 0 42.5 17.5T700-290v100q0 46.75-31.625 78.375T590-80zm40-150v-60q0-32-16-56t-54-32v-102q0-24.75 17.625-42.375T220-540h340q24.75 0 42.375 17.625T620-480v102q-38 8-54 32t-16 56v60z" />
  </svg>
);
export default SvgSceneFill;
