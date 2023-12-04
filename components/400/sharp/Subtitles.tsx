import * as React from "react";
import type { SVGProps } from "react";
const SvgSubtitles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520zm100-130h360v-60H240zm420 0h60v-60h-60zM240-470h60v-60h-60zm120 0h360v-60H360z" />
  </svg>
);
export default SvgSubtitles;
