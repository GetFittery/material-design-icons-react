import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M833-680q0-81-56.032-139Q720.935-877 640-877v-43q100 0 170 70t70 170zm-87 0q0-45-30.5-76T640-787v-46q63.75 0 108.375 45T789-680zM80-120v-633h207l73-87h240v60H388l-73 87H140v513h680v-460h60v520zm399.5-147q72.5 0 121.5-49t49-121.5q0-72.5-49-121T479.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49m0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5" />
  </svg>
);
export default SvgLinkedCamera;
