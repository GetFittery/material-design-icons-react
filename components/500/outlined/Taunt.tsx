import * as React from "react";
import type { SVGProps } from "react";
const SvgTaunt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M202.326-418.239q-22.398 11.956-47.09 5.978-24.693-5.978-36.41-28.652-13.717-26.913-4.62-55.587 9.098-28.674 38.199-38.481l346.899-117.976 31.348 61.696zm43.609 302.304v-253.521l368.304-194.131-18.239-35 210.913-103.739 30.348 61.457-283.196 211.956v312.978zm47.048-467.413q-55.831 0-94.907-39.196Q159-661.739 159-717.57q0-55.831 39.108-94.989 39.109-39.159 94.87-39.159t94.957 39.159q39.195 39.158 39.195 94.989t-39.158 95.026q-39.158 39.196-94.989 39.196" />
  </svg>
);
export default SvgTaunt;