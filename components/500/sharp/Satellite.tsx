import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M230.891-277.848h496.218L577-479.587l-132 171-93-127zm11.261-218q93 0 157.5-64.75t64.5-157.25h-54q0 70-48.837 119t-119.163 49zm0-131q39 0 67-26.687 28-26.688 28-64.313h-95zm-128.13 512.826v-732.196h732.196v732.196zm68.13-68.13h595.696v-595.696H182.152zm0 0v-595.696z" />
  </svg>
);
export default SvgSatellite;
