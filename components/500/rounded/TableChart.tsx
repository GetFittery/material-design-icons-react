import * as React from "react";
import type { SVGProps } from "react";
const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M817.848-115.022H182.152q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-594.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h635.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v594.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265m-635.696-523.5h635.696v-139.326H182.152zm148.805 60H182.152v395.37h148.805zm338.086 0v395.37h148.805v-395.37zm-60 0H390.957v395.37h218.086z" />
  </svg>
);
export default SvgTableChart;
