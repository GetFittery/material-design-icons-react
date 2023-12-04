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
    <path d="M74.022-74.022v-743.826q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H234.022zm134-228.13h609.826v-515.696H142.152v587.565zm-65.87 0v-515.696z" />
  </svg>
);
export default SvgChatBubble;
