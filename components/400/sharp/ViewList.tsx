import * as React from "react";
import type { SVGProps } from "react";
const SvgViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M350-220h470v-137H350zM140-603h150v-137H140zm0 187h150v-127H140zm0 196h150v-137H140zm210-196h470v-127H350zm0-187h470v-137H350zM80-160v-640h800v640z" />
  </svg>
);
export default SvgViewList;
