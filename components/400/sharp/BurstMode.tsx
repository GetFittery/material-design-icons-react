import * as React from "react";
import type { SVGProps } from "react";
const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-200v-560h60v560zm160 0v-560h60v560zm160 0v-560h560v560zm60-60h440v-440H420zm60-97h324L704-490l-84 110-61-82zm-60 97v-440z" />
  </svg>
);
export default SvgBurstMode;
