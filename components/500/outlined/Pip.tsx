import * as React from "react";
import type { SVGProps } from "react";
const SvgPip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M74.022-520.717v-68.37h169.152L46-785.022 94.978-834l196.174 196.174v-168.392h68.131v285.501zm68.13 366.695q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-228.565h68.13v228.565H485.5v68.13zm675.696-279.282v-304.544H429.283v-68.37h388.565q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v304.544zM545.5-153.782v-219.522h340.718v219.522z" />
  </svg>
);
export default SvgPip;
