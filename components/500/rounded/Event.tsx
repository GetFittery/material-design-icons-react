import * as React from "react";
import type { SVGProps } from "react";
const SvgEvent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M596.817-220Q556-220 528-248.183q-28-28.183-28-69T528.183-386q28.183-28 69-28T666-385.817q28 28.183 28 69T665.817-248q-28.183 28-69 28M182.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-615.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337H245v-25.847q0-14.354 9.964-24.253 9.963-9.9 24.234-9.9 14.697 0 24.782 9.9 10.085 9.899 10.085 24.253v25.847h331.87v-25.847q0-14.354 9.963-24.253 9.964-9.9 24.235-9.9 14.696 0 24.782 9.9Q715-866.419 715-852.065v25.847h62.848q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v615.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696V-570H182.152zm0-487.848h595.696v-127.848H182.152zm0 0v-127.848z" />
  </svg>
);
export default SvgEvent;
