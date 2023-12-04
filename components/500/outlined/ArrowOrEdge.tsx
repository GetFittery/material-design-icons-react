import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m290.435-114.022-151.74-151.739 47.74-49.217 69.934 70.173v-274.717H101.196q-28.448 0-48.409-20.016t-19.961-48.114v-258.566h68.37v258.566h155.173q28.448 0 48.409 20.016t19.961 48.114v274.717l69.696-68.934 47.739 47.978zm378.13 0L516.587-265.761l47.978-49.217 69.935 70.173v-274.717q0-28.098 19.891-48.114t48.24-20.016h156.412v-258.566h68.131v258.566q0 28.098-20.016 48.114-20.017 20.016-48.115 20.016H702.631v274.478l69.934-68.695 47.74 47.978z" />
  </svg>
);
export default SvgArrowOrEdge;
