import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M460-80q-91 0-155.5-62.5T240-296v-430q0-64 45.5-109T395-880q65 0 110 45t45 110v394q0 38-26 64.5T460-240q-38 0-64-28.5T370-336v-372q0-8 6-14t14-6q8 0 14 6t6 14v375q0 22 14.5 37.5T460-280q21 0 35.5-15t14.5-36v-395q0-48-33.5-81T395-840q-48 0-81.5 33T280-726v432q0 73 53 123.5T460-120q75 0 127.5-51T640-296v-412q0-8 6-14t14-6q8 0 14 6t6 14v411q0 91-64.5 154T460-80" />
  </svg>
);
export default SvgAttachFile;
