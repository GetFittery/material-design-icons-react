import * as React from "react";
import type { SVGProps } from "react";
const SvgRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m576-160-42-42 111-111-111-111 42-42 111 111 111-111 42 42-111 111 111 111-42 42-111-111zm83-374L517-676l42-42 100 99 179-179 42 43zM80-290v-60h360v60zm0-320v-60h360v60z" />
  </svg>
);
export default SvgRule;
