import * as React from "react";
import type { SVGProps } from "react";
const SvgArticle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M278.196-280.196h275v-60h-275zm0-169.804h403.847v-60H278.196zm0-170.043h403.847v-60H278.196zm-96.044 506.021q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default SvgArticle;
