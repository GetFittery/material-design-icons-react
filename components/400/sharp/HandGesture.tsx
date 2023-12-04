import * as React from "react";
import type { SVGProps } from "react";
const SvgHandGesture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M870-779q0-44-25-77.5T779-890v-50q62 0 101.5 48T920-779zM220-40q-75 0-127.5-52.65T40-220h50q0 54 38.071 92Q166.143-90 220-90zm124 0L54-468l62-53 164 124v-443h60v558L166-410l209 310h405v-700h60v760zm103-440v-440h60v440zm167 0v-400h60v400zM507-290" />
  </svg>
);
export default SvgHandGesture;
