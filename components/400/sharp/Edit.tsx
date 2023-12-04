import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-180h44l472-471-44-44-472 471zm-60 60v-128l617-616 128 128-617 616zm659-617-41-41zm-105 64-22-22 44 44z" />
  </svg>
);
export default SvgEdit;
