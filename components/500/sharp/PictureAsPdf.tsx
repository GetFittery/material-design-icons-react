import * as React from "react";
import type { SVGProps } from "react";
const SvgPictureAsPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M336.261-435.065h37v-83h68.087l16.913-17.153v-87.934l-16.913-16.913H336.261zm37-120v-48h48v48zm127.326 120h104.087l16.913-17.153v-170.934l-16.913-16.913H500.587zm37-37v-131h47v131zm132.043 37h37v-83h50v-37h-50v-48h50v-37h-87zM198.087-198.087v-692.196h692.196v692.196zm68.131-68.131h555.695v-555.695H266.218zm-196.5 196.5v-692.195h68.369v623.826h623.826v68.37H69.717Zm196.5-752.195v555.695z" />
  </svg>
);
export default SvgPictureAsPdf;
