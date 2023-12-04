import * as React from "react";
import type { SVGProps } from "react";
const SvgFlexNoWrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-310v-340q0-12.75 8.625-21.375T70-680h180q12.75 0 21.375 8.625T280-650v340q0 12.75-8.625 21.375T250-280H70q-12.75 0-21.375-8.625T40-310m320 0v-340q0-12.75 8.625-21.375T390-680h180q12.75 0 21.375 8.625T600-650v340q0 12.75-8.625 21.375T570-280H390q-12.75 0-21.375-8.625T360-310m320 0v-340q0-12.75 8.625-21.375T710-680h180q12.75 0 21.375 8.625T920-650v340q0 12.75-8.625 21.375T890-280H710q-12.75 0-21.375-8.625T680-310m-580-30h120v-280H100zm640 0h120v-280H740z" />
  </svg>
);
export default SvgFlexNoWrap;
