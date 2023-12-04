import * as React from "react";
import type { SVGProps } from "react";
const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M543-340q16.595 0 28.798-12.202Q584-364.405 584-381t-12.202-28.798Q559.595-422 543-422t-28.798 12.202Q502-397.595 502-381t12.202 28.798Q526.405-340 543-340m-25-126h47q2-29 8.5-43t32.5-39q27-26 37.5-45.395Q654-612.79 654-639q0-45.882-31.5-74.941Q591-743 540-743q-38 0-68 20.5T428-665l45 19q11-25 27.5-38t39.5-13q29.778 0 48.389 17Q607-663 607-637q0 20-9 35t-32 32q-32 29-40 46.5t-8 57.5M200-200v-680h680v680zm60-60h560v-560H260zM80-80v-680h60v620h620v60zm180-740v560z" />
  </svg>
);
export default SvgQuiz;
