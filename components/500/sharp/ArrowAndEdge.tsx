import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.239-114.022 328.261-265.761l47.978-49.217 69.935 70.173v-209.934q0-27.152-18.935-45.967-18.935-18.816-45.848-18.816H32.826v-326.696h68.37v258.566h280.195q29.631 0 54.902 11.837 25.272 11.837 43.946 32.511 18.674-20.674 43.946-32.511 25.272-11.837 54.902-11.837h279.956v-258.566h68.131v326.696H578.848q-27.152 0-45.848 18.816-18.696 18.815-18.696 45.967v209.934l69.935-68.934 47.739 47.978z" />
  </svg>
);
export default SvgArrowAndEdge;
