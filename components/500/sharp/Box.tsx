import * as React from "react";
import type { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-665.63v483.478h595.696V-665.63h-134.5v342.478L480-404.826l-163.109 81.674V-665.63zm-68.13 551.608v-611.63l90.608-120.566h549.979l91.609 120.566v611.63zm89.196-618.065h552.564l-36-46H239.218zm180.13 66.457v234.956L480-479l96.891 48.326V-665.63zm-201.196 0h595.696z" />
  </svg>
);
export default SvgBox;
