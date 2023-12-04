import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeBlocks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m330-480 70-70q9-9 9-22t-9-22q-9-9-21.833-9-12.834 0-22.167 9l-93 93q-5 5-7 10.133-2 5.134-2 11Q254-474 256-469q2 5 7 10l94 94q9.333 9 22.167 9Q392-356 401-365q9-9 9-22t-9-22zm300 0-71 71q-9 9-9 22t9 22q9 9 21.833 9 12.834 0 22.167-9l94-94q5-5 7-10.133 2-5.134 2-11Q706-486 704-491q-2-5-7-10l-94-94q-4-5-10-7t-12-2q-6 0-11.5 2t-10.167 6.8Q550-585.6 550-572.8q0 12.8 9 21.8zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgCodeBlocks;
