import * as React from "react";
import type { SVGProps } from "react";
const SvgFamilyLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m500-183 280-397-280-280-280 280zM400-47q-48 0-87-28.5T256-152q-10-27-28.387-42.5T186-210q-17 0-33.5 7.5T121-181q-4 4-8.8 6-4.8 2-11.2 2-12 0-21-9t-9-21.24q0-5.76 2-11.054 2-5.294 7-9.706 22-22 49.255-34 27.256-12 56.745-12 42 0 76.5 27t52.5 74q11 29 34.049 45.5T400-107q19 0 35.5-7t27.5-19L172-545q-6.4-8.206-9.2-17.159-2.8-8.952-2.8-17.904 0-11.937 4.5-22.9Q169-613.927 178-623l280-280q8.049-8.13 19.024-12.565Q488-920 500-920q12 0 22.976 4.435Q533.951-911.13 542-903l280 280q9 9.053 13.5 19.991Q840-592.07 840-580q0 10-3 18.5t-8 16.5L516-103q-19 26-49.5 41T400-47" />
  </svg>
);
export default SvgFamilyLink;
