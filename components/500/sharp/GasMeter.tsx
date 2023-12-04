import * as React from "react";
import type { SVGProps } from "react";
const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M154.022-74.022v-730.043h208.804v-82.153h68.37v82.153h97.847v-82.153h68.131v82.153h208.804v730.043zm68.13-68.13h515.457v-593.544H222.152zm96.413-429h322.631v-68.131H318.565zM480-263.087q33 0 56.5-23.38Q560-309.848 560-341.98q0-26.107-15-44.987-15-18.881-65-76.12-50 58-65 76.5t-15 44.5q0 32.239 23.5 55.62 23.5 23.38 56.5 23.38M222.152-142.152v-593.544z" />
  </svg>
);
export default SvgGasMeter;
