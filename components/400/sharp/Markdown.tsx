import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43zM80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520zm79-140h50v-190h53v127h50v-127h60v190h50v-240H219z" />
  </svg>
);
export default SvgMarkdown;
