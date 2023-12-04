import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M690.935-72.63v-128.305h-421.87q-27.599 0-47.864-20.266-20.266-20.265-20.266-47.864v-421.87H72.63q-14.423 0-24.244-9.871-9.82-9.871-9.82-24.369 0-14.499 9.82-24.195 9.82-9.695 24.244-9.695h128.305V-887.37q0-14.423 9.871-24.244t24.369-9.821q14.499 0 24.195 9.821 9.695 9.821 9.695 24.244v618.305H887.37q14.423 0 24.244 9.871t9.821 24.369q0 14.499-9.821 24.195-9.821 9.695-24.244 9.695H759.065V-72.63q0 14.423-9.871 24.244-9.871 9.82-24.369 9.82-14.499 0-24.195-9.82-9.695-9.82-9.695-24.244m0-256.435v-361.87h-361.87v-68.13h361.87q27.599 0 47.864 20.266 20.266 20.265 20.266 47.864v361.87z" />
  </svg>
);
export default SvgCrop;
