import * as React from "react";
import type { SVGProps } from "react";
const SvgTableChartView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M289-81.022 241.022-129 516-404.739l140 140 216-215L919.739-432 656-168.022l-140-140zm-146.848-33q-27.587 0-47.859-20.265-20.271-20.266-20.271-47.865v-615.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v197.283H142.152zm0-553h595.696v-130.826H142.152zm0 0v-130.826z" />
  </svg>
);
export default SvgTableChartView;
