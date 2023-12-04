import * as React from "react";
import type { SVGProps } from "react";
const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M290-607H110q-12.75 0-21.375-8.675Q80-624.351 80-637.175 80-650 88.625-658.5T110-667h180v-139l-59 59q-9 9-21 9t-21.391-9Q180-756 180-768t9-21l110-110q9-9 21-9t21 9l110 110q9 9 9 21t-8.609 21Q442-738 430-738q-12 0-21-9l-59-59v453h500q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T850-293H670v139l59-59q9-9 21-9t21.391 9Q780-204 780-192t-9 21L661-61q-9 9-21 9t-21-9L509-171q-9-9-9-21t8.609-21Q518-222 530-222q12 0 21 9l59 59v-139H350q-26 0-43-17t-17-43zm320 194v-194H410v-60h200q26 0 43 17t17 43v194z" />
  </svg>
);
export default SvgTransform;