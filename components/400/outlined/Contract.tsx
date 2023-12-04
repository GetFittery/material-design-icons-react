import * as React from "react";
import type { SVGProps } from "react";
const SvgContract = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M225-80q-43.75 0-74.375-30.625T120-185v-135h120v-560h600v695q0 43.75-30.625 74.375T735-80zm509.912-60Q754-140 767-152.938q13-12.937 13-32.062v-635H300v500h390v135q0 19.125 12.912 32.062 12.913 12.938 32 12.938M360-640v-60h360v60zm0 120v-60h360v60zM224-140h406v-120H180v75q0 19.125 13 32.062Q206-140 224-140m0 0h-44 450z" />
  </svg>
);
export default SvgContract;
