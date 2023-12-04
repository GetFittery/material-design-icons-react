import * as React from "react";
import type { SVGProps } from "react";
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M234.022-234.022 132.196-132.196q-16.153 16.153-37.163 7.45-21.011-8.702-21.011-31.08v-662.022q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm-26-68.13h609.826v-515.696H142.152v587.565zm-65.87 0v-515.696z" />
  </svg>
);
export default SvgChatBubble;
