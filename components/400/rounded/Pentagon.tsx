import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M283.598-180H676l133-397-329-229-329 229zM283-120q-19.5 0-35.25-11.182T226-161L94-558q-6-19 .105-37.846Q100.211-614.692 117-626l329-230q16-11 34-11t34 11l329 230q16.789 11.308 22.895 30.154Q872-577 866-558L734-161q-6 18.636-21.75 29.818Q696.5-120 677-120zm197-373" />
  </svg>
);
export default SvgPentagon;
