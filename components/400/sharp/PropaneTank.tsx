import * as React from "react";
import type { SVGProps } from "react";
const SvgPropaneTank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-80q-66 0-113-47t-47-113v-320q0-57 34-99t86-56v-165h400v165q52 14 86 56t34 99v320q0 66-47 113T640-80zM220-420h520v-140q0-42-29-71t-71-29H320q-42 0-71 29t-29 71zm100 280h320q42 0 71-29t29-71v-120H220v120q0 42 29 71t71 29m200-580h100v-100H340v100h100v-40h80z" />
  </svg>
);
export default SvgPropaneTank;
