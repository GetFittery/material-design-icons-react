import * as React from "react";
import type { SVGProps } from "react";
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M151-386q-12-8.941-11.5-23.471Q140-424 152.075-433q8.302-6 18.114-6Q180-439 188-433l292 227 292-227q8.324-6 18.162-6t18.088 5.966q12 8.949 12.375 23.492Q821-395 809-386L517-159q-16.5 13-36.75 13T443-159zm292 75L181-515q-23-17.882-23-46.941T181-609l262-204q16.5-13 36.75-13T517-813l262 204q23 17.882 23 46.941T779-515L517-311q-16.5 13-36.75 13T443-311m37-47 262-204-262-204-262 204zm0-204" />
  </svg>
);
export default SvgLayers;
