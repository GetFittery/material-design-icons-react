import * as React from "react";
import type { SVGProps } from "react";
const SvgDrafts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-925.5 372.435 222.717q19.63 10.674 26.706 28.087 7.077 17.413 7.077 35.283v458.935q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-458.935q0-17.87 7.337-35.283t26.206-28.087zm0 471.022 332.174-194.848L480-849.174 147.826-649.326zm0 69.869L142.152-583.174v402.696h675.696v-402.696zm0 204.131h337.848-675.696z" />
  </svg>
);
export default SvgDrafts;
