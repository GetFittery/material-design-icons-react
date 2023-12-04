import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-182.152h595.696v-595.696H182.152zm-68.13 68.13v-732.196h732.196v732.196zM336-292.087l144-144 144 144L667.913-336l-144-144 144-144L624-667.913l-144 144-144-144L292.087-624l144 144-144 144zM182.152-182.152v-595.696z" />
  </svg>
);
export default SvgDisabledByDefault;
