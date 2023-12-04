import * as React from "react";
import type { SVGProps } from "react";
const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M74.5-74.5v-490.087l291-123.783v80.239l200-81.239v123.966h320V-74.5zm68.13-68.13h674.74v-354.472H498.565v-90.833l-200 80v-79.239L142.63-518.326zM447.37-240h65.26v-160h-65.26zm-162.87 0H350v-160h-65.5zm325.5 0h65.5v-160H610zm275.5-325.5H699.283l40-318.565h105.5zM142.63-142.63h674.74z" />
  </svg>
);
export default SvgFactory;
