import * as React from "react";
import type { SVGProps } from "react";
const SvgEditNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-410v-60h300v60zm0-165v-60h470v60zm0-165v-60h470v60zm360 580v-123l263-262 122 122-262 263zm300-263-37-37zM580-220h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" />
  </svg>
);
export default SvgEditNote;
