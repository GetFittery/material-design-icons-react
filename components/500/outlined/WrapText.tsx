import * as React from "react";
import type { SVGProps } from "react";
const SvgWrapText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M579.478-114.695 434.5-260.435l144.978-146.739 48.218 48.739-62.935 64.696h128.326q35 0 60-25.38 25-25.381 25-60.62 0-35-25-60t-60-25H154.022v-67.891h539.065q63.348 0 108.239 44.771 44.892 44.772 44.892 108.12 0 63.587-44.892 108.978-44.891 45.392-108.239 45.392H564.761l62.696 61.934zM154.022-225.369v-68.37h205.739v68.37zm0-477.261v-68.131h652.196v68.131z" />
  </svg>
);
export default SvgWrapText;
