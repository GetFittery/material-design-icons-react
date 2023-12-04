import * as React from "react";
import type { SVGProps } from "react";
const SvgEditSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h465l-60 60H180v600h600v-348l60-60v468zm748-360H480zM360-360v-170l424-424 168 170-422 424zm508-425-84-84zM420-420h85l253-253-43-42-43-42-252 251zm295-295-43-42zl43 42z" />
  </svg>
);
export default SvgEditSquare;
