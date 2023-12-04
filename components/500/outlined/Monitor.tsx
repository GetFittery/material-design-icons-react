import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M257.37-114.022v-73L307-236.891H142.152q-27.599 0-47.865-20.266-20.265-20.266-20.265-47.865v-472.826q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v472.826q0 27.599-20.337 47.865-20.336 20.266-48.033 20.266H652l50.63 49.869v73zm-115.218-191h675.696v-472.826H142.152zm0 0v-472.826z" />
  </svg>
);
export default SvgMonitor;
