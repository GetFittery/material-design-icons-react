import * as React from "react";
import type { SVGProps } from "react";
const SvgHowToVote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 19h14v1H5z" opacity={0.3} />
    <path d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 0 0 2-2v-4zm1 7H5v-1h14z" />
    <path d="M12.048 12.905 8.505 9.362l4.95-4.95 3.543 3.543z" opacity={0.3} />
    <path d="M19.11 7.25 14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41m-7.06 5.65L8.51 9.36l4.95-4.95L17 7.95z" />
  </svg>
);
export default SvgHowToVote;