import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M137.37-109q-27.588 0-47.979-20.336T69-177.37v-371h68.37v371h452V-109zm126.26-125.5q-27.587 0-48.358-20.266Q194.5-275.031 194.5-302.63v-371h68.13v371h453v68.13zM388.37-360q-27.698 0-48.034-20.336T320-428.37v-354.26q0-27.698 20.336-48.034T388.37-851h434.26q27.698 0 48.034 20.336T891-782.63v354.26q0 27.698-20.336 48.034T822.63-360zm0-68.37h434.26v-292.26H388.37z" />
  </svg>
);
export default SvgDynamicFeed;
