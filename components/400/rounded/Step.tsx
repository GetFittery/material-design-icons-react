import * as React from "react";
import type { SVGProps } from "react";
const SvgStep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M772-367q-47 0-79-32.5T661-479q0-47 32-79.5t79-32.5q46 0 78.5 32.5T883-479q0 47-32.5 79.5T772-367m-338-81H107q-13 0-22-9t-9-22q0-13 9-22t22-9h327l-93-94q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l145 146q9 9 9 21t-9 21L383-311q-9 9-21 9t-21-9q-8-9-8-21t8-21z" />
  </svg>
);
export default SvgStep;
