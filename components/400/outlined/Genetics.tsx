import * as React from "react";
import type { SVGProps } from "react";
const SvgGenetics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-40v-40q0-140 65-226t169-174q-104-88-169-174t-65-226v-40h60v40q0 11 .5 20.5T262-840h436q1-10 1.5-19.5t.5-20.5v-40h60v40q0 140-65 226T526-480q104 88 169 174t65 226v40h-60v-40q0-11-.5-20.5T698-120H262q-1 10-1.5 19.5T260-80v40zm120-640h320q16-23 27.5-47.5T687-780H273q8 28 19.5 52.5T320-680m160 161q31-26 59-50.5t52-50.5H369q24 26 51.5 50.5T480-519M369-340h222q-24-26-52-50.5T480-441q-31 26-59 50.5T369-340m-96 160h414q-8-28-19.5-52.5T640-280H320q-16 23-27.5 47.5T273-180" />
  </svg>
);
export default SvgGenetics;
