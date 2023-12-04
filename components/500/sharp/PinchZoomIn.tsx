import * as React from "react";
import type { SVGProps } from "react";
const SvgPinchZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m51.609-473.13-32.544-32.783 125.217-125.978H47.826v-46.457h176.457v176.457h-46.457v-96.696zM280.89-734.717v-176.457h46.457v96.217l126.217-125.978 33.544 33.305L360.89-781.174h96.457v46.457H280.891ZM531.804-32.826 287.978-278.804l40.435-60.826 140.108 39.869v-371.435h64.783v457.174l-124.956-35.152L558.956-97.609H862.63v-315.5h64.544v380.283zm68.5-293.826v-206.457h64.544v206.457zm130.544 0v-166.457h64.782v166.457zm-36 104.282" />
  </svg>
);
export default SvgPinchZoomIn;
