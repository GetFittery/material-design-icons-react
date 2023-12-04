import * as React from "react";
import type { SVGProps } from "react";
const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M574.913-362.609v-232.152h170.674v232.152zm51.435-51.674h67.804v-128.565h-67.804zm-411.935 51.674v-139.956h118.522v-40.522H214.413v-51.674h170.674v139.957H266.565v40.521h118.522v51.674zM450.935-520.37v-64.065h58.13v64.065zm0 147.435V-437h58.13v64.065zM69-149v-659.37h211.435V-891h65.5v82.63h268.13V-891h65.74v82.63H891V-149zm75.5-75.5h306.435v-64.065h58.13v64.065H815.5v-508.13H509.065v64.065h-58.13v-64.065H144.5zm0 0v-508.13z" />
  </svg>
);
export default SvgScoreboard;
