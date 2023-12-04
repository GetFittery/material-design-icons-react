import * as React from "react";
import type { SVGProps } from "react";
const SvgPinchZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M32.826-486.891v-176.457h46.457v97.457L205.26-691.87l32.782 32.544-125.978 125.978h97.218v46.457zm268.087-235.305-32.783-32.543 125.979-125.978h-97.218v-46.457h176.457v176.457h-46.457v-97.457zm230.891 689.37L287.978-278.804l40.435-60.826 140.108 39.869v-371.435h64.783v457.174l-124.956-35.152L558.956-97.609H862.63v-315.5h64.544v380.283zm68.5-293.826v-206.457h64.544v206.457zm130.544 0v-166.457h64.782v166.457zm-36 104.282" />
  </svg>
);
export default SvgPinchZoomOut;
