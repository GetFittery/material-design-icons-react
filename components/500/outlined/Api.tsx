import * as React from "react";
import type { SVGProps } from "react";
const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-369.261 369.261-480 480-590.739 590.739-480zm-85-304.283-86.826-86.826L480-931.957 651.826-760.37 565-673.544l-85-85zm-195.131 365.37L28.043-480 199.87-651.826 286.456-565l-85 85 85 85zm560.501 0L673.544-395l85-85-85-85 86.826-86.826L931.957-480zM480-28.044 308.174-199.868 395-286.456l85 85 85-85 86.826 86.587z" />
  </svg>
);
export default SvgApi;
