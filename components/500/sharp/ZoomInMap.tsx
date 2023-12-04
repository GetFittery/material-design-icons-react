import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomInMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m143.957-94.978-48.979-48.979 142.935-142.934H114.022v-68.131h241v241h-68.131v-123.891zm672.086 0L673.348-237.913v123.891h-68.37v-241h241.24v68.131H722.087l142.935 142.934zm-702.021-510v-68.37h123.891L94.978-816.043l48.979-48.979 142.934 142.935v-124.131h68.131v241.24zm490.956 0v-241.24h68.37v124.131l143.695-143.935 48.979 48.979-143.935 143.695h124.131v68.37z" />
  </svg>
);
export default SvgZoomInMap;
