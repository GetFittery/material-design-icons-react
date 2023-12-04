import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.152-154.022q-28.349 0-48.24-19.89-19.89-19.891-19.89-48.24v-515.696q0-28.447 19.89-48.408 19.891-19.962 48.24-19.962h675.696q28.447 0 48.408 19.962 19.962 19.961 19.962 48.408v515.696q0 28.349-19.962 48.24-19.961 19.89-48.408 19.89zm264.066-68.13h411.63v-515.696h-411.63zm-68.37 0v-515.696H142.152v515.696zm-195.696 0v-515.696zm195.696 0h68.37zm0-515.696h68.37z" />
  </svg>
);
export default SvgThumbnailBar;
