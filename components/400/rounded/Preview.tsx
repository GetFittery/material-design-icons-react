import * as React from "react";
import type { SVGProps } from "react";
const SvgPreview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120zm0-60h600v-520H180zm300.041-105Q400-285 337-328.152q-63-43.151-92-112Q274-509 336.959-552t143-43Q560-595 623-551.849q63 43.152 92 112.001Q686-371 623.041-328t-143 43M480-335q57 0 104.949-27.825T660-440q-27.102-49.35-75.051-77.175Q537-545 480-545t-104.949 27.825Q327.102-489.35 300-440q27.102 49.35 75.051 77.175Q423-335 480-335m.118-55Q501-390 515.5-404.618q14.5-14.617 14.5-35.5Q530-461 515.382-475.5q-14.617-14.5-35.5-14.5Q459-490 444.5-475.382q-14.5 14.617-14.5 35.5Q430-419 444.618-404.5q14.617 14.5 35.5 14.5" />
  </svg>
);
export default SvgPreview;
