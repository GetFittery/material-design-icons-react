import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M445.935-74.022v-185.695H228.087L114.022-373.782l114.065-114.066h217.848v-90H154.022v-228.37h291.913v-80h68.13v80h217.848l114.305 114.305-114.305 114.065H514.065v90h292.153v228.131H514.065v185.695zM219.522-643.348h485.239l48.565-48.565-48.565-48.804H219.522zm35.717 318.37h485.239v-97.37H255.239l-48.565 48.566zm-35.717-318.37v-97.369zm520.956 318.37v-97.37z" />
  </svg>
);
export default SvgSignpost;
