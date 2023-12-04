import * as React from "react";
import type { SVGProps } from "react";
const SvgMeasuringTape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-160v-340q0-142 99-241t241-99q142 0 241 99t99 241q0 142-99 241t-241 99zm60-60h280q116.308 0 198.154-81.783Q820-383.565 820-499.783 820-616 738.217-698q-81.782-82-198-82Q424-780 342-698.154 260-616.308 260-500zm280-140q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41m.235-60Q507-420 483.5-443.265q-23.5-23.264-23.5-56.5Q460-533 483.265-556.5q23.264-23.5 56.5-23.5Q573-580 596.5-556.735q23.5 23.264 23.5 56.5Q620-467 596.735-443.5q-23.264 23.5-56.5 23.5M80-160v-200h60v200zm460-340" />
  </svg>
);
export default SvgMeasuringTape;
