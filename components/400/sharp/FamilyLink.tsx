import * as React from "react";
import type { SVGProps } from "react";
const SvgFamilyLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M400-47q-48 0-87-28.5T256-152q-10-27-28.5-42.5T186-210q-17 0-33.5 7.5T121-181l-41-43q22-22 49.5-34t56.5-12q42 0 76.5 27t52.5 74q11 29 34 45.5t51 16.5q19 0 35.5-7t27.5-19L142-587l358-358 358 358-342 484q-19 26-49.5 41T400-47m100-136 280-397-280-280-280 280zm0-339" />
  </svg>
);
export default SvgFamilyLink;
