import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscopeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m720-120-42-42 87-88H560v-60h205l-87-88 42-42 160 160zM540-81q-112 0-186-78.5T280-347v-35q-85-11-142.5-75.5T80-610v-230h120v-40h60v140h-60v-40h-60v170q0 71 49.5 120.5T310-440q71 0 120.5-49.5T480-610v-170h-60v40h-60v-140h60v40h120v230q0 88-57.5 152.5T340-382v35q0 85 56.5 145.5T540-141z" />
  </svg>
);
export default SvgStethoscopeArrow;
