import * as React from "react";
import type { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-674v494h600v-494H640v342l-160-80-160 80v-342zm-60 554v-609l82-111h555l83 111v609zm77-614h565l-36-46H233zm183 60v245l100-50 100 50v-245zm-200 0h600z" />
  </svg>
);
export default SvgBox;
