import * as React from "react";
import type { SVGProps } from "react";
const SvgLiquor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-80v-60h78v-141q-35-10-56.5-38.5T120-386v-334h216v334q0 35-21.5 65T258-281v141h78v60zm60-419h96v-161h-96zm48 161q19 0 33.5-14.5T276-386v-53h-96v53q0 19 14.5 33.5T228-338M460-80v-502l126-57v-241h164v239l130 58v503zm186-696h44v-44h-44zM520-465h300v-83l-130-50v-118h-44v109l-126 58.943zm0 325h300v-103H520zm0-163h300v-102H520zm0 0v-102z" />
  </svg>
);
export default SvgLiquor;
