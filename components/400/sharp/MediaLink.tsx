import * as React from "react";
import type { SVGProps } from "react";
const SvgMediaLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M314-203v-164l132 82zm206-382q-45.833 0-77.917-32.118-32.083-32.117-32.083-78Q410-741 442.083-773q32.084-32 77.917-32h40v40h-40q-29.167 0-49.583 20.382Q450-724.235 450-695.118 450-666 470.417-645.5 490.833-625 520-625h40v40zm120 0v-40h40q29.167 0 49.583-20.382Q750-665.765 750-694.882 750-724 729.583-744.5 709.167-765 680-765h-40v-40h40q45.833 0 77.917 32.118 32.083 32.117 32.083 78Q790-649 757.917-617 725.833-585 680-585zm-110-90v-40h140v40zm123 265v-80h207v-370H340v370h-60v-430h640v510zM40-40v-490h640v490zm60-60h520v-370H100zm260-185" />
  </svg>
);
export default SvgMediaLink;
