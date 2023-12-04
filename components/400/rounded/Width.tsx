import * as React from "react";
import type { SVGProps } from "react";
const SvgWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m235-450 66 68q8 8 8 20.5t-8 20.5q-9 9-21.5 9t-20.5-9L141-458q-5-5-7-10.5t-2-11.5q0-5 2-10.5t7-10.5l117-117q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l-66 65h490l-67-67q-8-8-8-20.5t9-21.5q8-8 20.5-8t21.5 8l117 118q5 5 7 10.5t2 10.5q0 6-2 11.5t-7 10.5L700-340q-8 8-20.5 8t-21.5-9q-8-8-8-20.5t8-20.5l67-68z" />
  </svg>
);
export default SvgWidth;
