import * as React from "react";
import type { SVGProps } from "react";
const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m358-160-250 52 52-250zm0 0L160-358l515-515 198 198zm-12-73 442-442-113-113-442 442z" />
  </svg>
);
export default SvgStylus;
