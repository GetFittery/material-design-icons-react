import * as React from "react";
import type { SVGProps } from "react";
const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.63-74.5q-28.097 0-48.114-20.016Q74.5-114.533 74.5-142.63v-376.696q0-20.796 11.435-38.127 11.434-17.33 30.587-25.286l203.63-86.196q16.435-6.717 30.892 2.489 14.456 9.207 14.456 26.902v31.413l153.261-61.847q17.152-6.718 31.946 3.545 14.793 10.262 14.793 28.281v72.652h320v422.87q0 28.097-20.016 48.114Q845.467-74.5 817.37-74.5zm0-68.13h674.74v-354.472H498.565v-90.833l-200 80v-79.239L142.63-518.326zM447.37-240h65.26v-160h-65.26zm-162.87 0H350v-160h-65.5zm325.5 0h65.5v-160H610zm275.5-325.5H699.283l36.521-288.978q2-12.674 11.236-21.131 9.236-8.456 21.83-8.456h46.326q12.62 0 21.922 8.32 9.302 8.319 11.382 21.028zM142.63-142.63h674.74z" />
  </svg>
);
export default SvgFactory;