import * as React from "react";
import type { SVGProps } from "react";
const SvgTextFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M230-200q-13 0-21.5-8.5T200-230q0-13 8.5-21.5T230-260h500q13 0 21.5 8.5T760-230q0 13-8.5 21.5T730-200zm60-195 154-388q3-8 10-12.5t15-4.5h22q8 0 15 4.5t10 12.5l154 389q5 13-2 23.5T647-360q-8 0-14.5-4.5T623-377l-39-102H376l-39 103q-3 8-9 12t-14 4q-14 0-21.5-11t-2.5-24m103-129h174l-85-222h-4z" />
  </svg>
);
export default SvgTextFormat;
