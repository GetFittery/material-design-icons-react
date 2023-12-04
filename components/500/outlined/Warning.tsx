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
    <path d="M34.739-116.891 480-886.218l445.261 769.327zm113.805-65.739h662.912L480-754.978zm335.631-54.848q12.963 0 21.872-9.085 8.91-9.085 8.91-22.047t-9.085-21.752q-9.085-8.79-22.047-8.79-12.963 0-21.872 8.965-8.91 8.966-8.91 21.928 0 12.962 9.085 21.871 9.085 8.91 22.047 8.91M454-348h60v-222.087h-60zm26-120.804" />
  </svg>
);
export default SvgWarning;
