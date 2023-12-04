import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M198.087-198.087V-422.87h68.131v156.652h555.695v-497.847H266.218v156.413h-68.131v-282.631h692.196v692.196zM69.717-69.717v-692.196h68.37v623.826h623.826v68.37zm437.457-276.196-45.109-45.348 90.609-91.609H198.087v-64.782h354.587l-90.609-91.609 45.109-45.109 169.348 169.109z" />
  </svg>
);
export default SvgMoveGroup;
