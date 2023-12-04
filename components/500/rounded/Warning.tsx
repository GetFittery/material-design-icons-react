import * as React from "react";
import type { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M93.913-116.891q-10.311 0-17.883-4.795-7.572-4.794-11.704-12.357-4.645-7.318-5.062-16.233-.416-8.915 5.062-18.072L450.413-835q5.478-8.957 13.079-12.935 7.6-3.978 16.533-3.978 8.932 0 16.508 3.978 7.576 3.978 13.054 12.935l386.087 666.652q5.478 9.157 5.062 18.072-.417 8.915-5.062 16.233-4.174 7.467-11.725 12.309-7.551 4.843-17.862 4.843zm54.631-65.739h662.912L480-754.978zm335.631-54.848q12.963 0 21.872-9.085 8.91-9.085 8.91-22.047t-9.085-21.752q-9.085-8.79-22.047-8.79-12.963 0-21.872 8.965-8.91 8.966-8.91 21.928 0 12.962 9.085 21.871 9.085 8.91 22.047 8.91m0-110.522q12.825 0 21.325-8.625T514-378v-162.087q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625t-8.5 21.375V-378q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625M480-468.804" />
  </svg>
);
export default SvgWarning;
