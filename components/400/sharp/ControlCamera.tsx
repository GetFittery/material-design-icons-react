import * as React from "react";
import type { SVGProps } from "react";
const SvgControlCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-375q-44 0-74.5-30.5T375-480q0-44 30.5-74.5T480-585q44 0 74.5 30.5T585-480q0 44-30.5 74.5T480-375m-1 296L301-258l42-42 135 136 137-137 43 43zM258-300 79-478l179-179 42 42-136 136 137 136zm84-357-42-43 178-178 179 178-42 42-136-136zm358 357-42-43 135-135-136-137 43-43 179 179z" />
  </svg>
);
export default SvgControlCamera;
