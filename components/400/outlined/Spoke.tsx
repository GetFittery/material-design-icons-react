import * as React from "react";
import type { SVGProps } from "react";
const SvgSpoke = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.5-540Q418-540 374-584.062 330-628.125 330-690q0-63 44.062-106.5Q418.125-840 480-840q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44m-.5-60q38 0 64-26.438 26-26.437 26-63.562 0-38-26-64t-63.5-26q-37.5 0-64 26T390-690.5q0 37.5 26.438 64Q442.875-600 480-600M270.5-120Q208-120 164-164.062 120-208.125 120-270q0-63 44.062-106.5Q208.125-420 270-420q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44m-.5-60q38 0 64-26.438 26-26.437 26-63.562 0-38-26-64t-63.5-26q-37.5 0-64 26T180-270.5q0 37.5 26.438 64Q232.875-180 270-180m420.5 60Q628-120 584-164.062 540-208.125 540-270q0-63 44.062-106.5Q628.125-420 690-420q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44m-.5-60q38 0 64-26.438 26-26.437 26-63.562 0-38-26-64t-63.5-26q-37.5 0-64 26T600-270.5q0 37.5 26.438 64Q652.875-180 690-180m0-90" />
  </svg>
);
export default SvgSpoke;