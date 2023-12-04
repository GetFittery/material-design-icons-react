import * as React from "react";
import type { SVGProps } from "react";
const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M0-365v-230h60v230zm120 88v-406h60v406zm780-88v-230h60v230zm-120 88v-406h60v406zM240-120v-720h480v720zm60-60h360v-600H300zm0 0v-600z" />
  </svg>
);
export default SvgVibration;
