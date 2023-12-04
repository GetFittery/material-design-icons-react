import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M452-403v171q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T512-232v-171l61 61q3 3 15-2t22.5-9q10.5-4 14.5-3.5T615-342q9-9 8.5-21t-9.5-21L501-494q-5-5-10.133-7-5.134-2-11-2Q474-503 469-501q-5 2-10 7L347-382q-9 9-9 21t9 21.391Q356-331 368-331t21-9zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h336q12.444 0 23.722 5T599-862l183 183q8 8 13 19.278 5 11.278 5 23.722v496q0 24-18 42t-42 18zm331-584v-156H220v680h520v-494H581q-12.75 0-21.375-8.625T551-664M220-820v186zv680z" />
  </svg>
);
export default SvgUploadFile;
