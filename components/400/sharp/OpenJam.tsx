import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenJam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-120h480v-60H510v-339l78 78 46-46-154-154-154 154 46 46 78-78v339H240zM80-328v-512h800v512H610v-60h210v-392H140v392h210v60z" />
  </svg>
);
export default SvgOpenJam;
