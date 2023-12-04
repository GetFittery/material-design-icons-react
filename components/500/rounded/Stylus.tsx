import * as React from "react";
import type { SVGProps } from "react";
const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M167.957-115.456q-23.631 5.478-40.685-11.696-17.055-17.174-11.816-40.805l40.24-192.434 204.695 204.695zm192.434-40.24L155.696-360.391l472.76-472.761q19.631-19.631 47.859-19.631 28.229 0 47.62 19.631l109.217 109.217q19.631 19.391 19.631 47.62 0 28.228-19.631 47.859zm315.805-628.478L238.022-346 346-238.022l438.174-438.174z" />
  </svg>
);
export default SvgStylus;
