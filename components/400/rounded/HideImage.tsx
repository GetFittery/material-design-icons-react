import * as React from "react";
import type { SVGProps } from "react";
const SvgHideImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m840-233-60-60v-487H293l-60-60h547q24 0 42 18t18 42zM180-120q-24 0-42-18t-18-42v-562l-42-42q-9-9-9-21.5t9-21.5q9-9 21.5-9t21.5 9l707 707q9 9 9 21t-9 21q-9 9-21.5 9T785-78l-43-42zm406-157H266q-9 0-13-8t2-16l86-112q5-6 12-6t12 6l81 111 50-65-316-316v503h503zM432-432" />
  </svg>
);
export default SvgHideImage;
