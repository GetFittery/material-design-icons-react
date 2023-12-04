import * as React from "react";
import type { SVGProps } from "react";
const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-182.152h595.696v-364.304q-20.761 12.282-44.266 17.923-23.504 5.642-47.582 5.642-68.344 0-116.726-48.383Q520.891-619.656 520.891-688q0-23.4 5.642-46.244 5.641-22.843 17.923-43.604H182.152zm-68.13 68.13v-732.196h732.196v732.196zm68.13-663.826v595.696z" />
  </svg>
);
export default SvgRipples;
