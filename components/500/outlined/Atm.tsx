import * as React from "react";
import type { SVGProps } from "react";
const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M404.217-358.565v-192h-77.369v-50.87h205.369v50.87h-77.369v192zm-328.282 0v-207.472q0-15.776 9.81-25.587 9.811-9.811 25.625-9.811h139q15.711 0 25.453 9.811 9.742 9.811 9.742 25.572v207.487h-50.63v-77h-108.37v77zm50.63-127.87h108.37v-64.13h-108.37zm452.739 127.87v-207.472q0-15.776 9.742-25.587t25.454-9.811h234.13q15.814 0 25.624 9.811 9.811 9.811 9.811 25.587v207.472h-50.63v-192h-76.367v150h-50.767v-150h-76.366v192z" />
  </svg>
);
export default SvgAtm;
