import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M437-80q-24 0-42-17.625T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.656-96T295-840h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.375T523-80zM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703zm0 154h520v-94H220zm0 0v-94z" />
  </svg>
);
export default SvgFormatPaint;
