import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-510v-290h460v290zm60-60h340v-170H140zM80-160v-290h540v290zm60-60h420v-170H140zm540 60v-350h-80v-290h280l-80 220h80zM195-275h60v-60h-60zm0-350h60v-60h-60zm-55 55v-170zm0 350v-170z" />
  </svg>
);
export default SvgDynamicForm;
