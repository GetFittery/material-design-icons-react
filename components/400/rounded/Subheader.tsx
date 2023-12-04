import * as React from "react";
import type { SVGProps } from "react";
const SvgSubheader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm95 197h270q18.75 0 31.875-13.177Q590-609.353 590-628.176 590-647 576.875-660T545-673H275q-18.75 0-31.875 13.177Q230-646.647 230-627.824 230-609 243.125-596T275-583" />
  </svg>
);
export default SvgSubheader;
