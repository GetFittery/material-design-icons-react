import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm680-525L496-473q-4 2-7.5 3.5T480-468q-5 0-8.5-1.5T464-473L140-685v465h680zM480-522l336-218H145zM140-685v7-39.317.732V-740v23-.912V-678zv465z" />
  </svg>
);
export default SvgMail;
