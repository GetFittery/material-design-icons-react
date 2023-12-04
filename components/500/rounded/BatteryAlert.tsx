import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M307.01-74.022q-14.782 0-24.603-9.82-9.82-9.821-9.82-24.245v-679.826q0-14.394 9.82-24.349 9.821-9.956 24.484-9.956h89.044v-29.695q0-14.394 9.82-24.349 9.821-9.956 24.245-9.956h100q14.424 0 24.245 9.956 9.82 9.955 9.82 24.349v29.695h89.283q14.424 0 24.245 9.956 9.82 9.955 9.82 24.349v679.826q0 14.424-9.82 24.245-9.821 9.82-24.245 9.82zm33.947-68.13h278.086v-611.696H340.957zm0 0h278.086zm139.239-259.174q14 0 23.576-9.597 9.576-9.596 9.576-23.512v-180q0-14.017-9.701-23.682-9.702-9.666-23.772-9.666-14.071 0-23.527 9.666-9.457 9.665-9.457 23.682v180q0 13.916 9.653 23.512 9.653 9.597 23.652 9.597m.187 152.87q13.817 0 23.391-9.837 9.574-9.837 9.574-23.655 0-13.817-9.699-23.391-9.699-9.574-23.766-9.574-13.318 0-23.155 9.699-9.837 9.699-9.837 23.766 0 13.318 9.837 23.155 9.837 9.837 23.655 9.837" />
  </svg>
);
export default SvgBatteryAlert;