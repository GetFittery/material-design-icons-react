import * as React from "react";
import type { SVGProps } from "react";
const SvgMeetingRoom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6zm-4 5v2h2v-2z" />
  </svg>
);
export default SvgMeetingRoom;