import * as React from "react";
import type { SVGProps } from "react";
const SvgKitchen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6zm2-8h2v5H8zM6 9h12V4H6zm2-4h2v3H8z"
      opacity={0.3}
    />
    <path d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99M18 20H6v-9.02h12zm0-11H6V4h12zM8 5h2v3H8zm0 7h2v5H8z" />
  </svg>
);
export default SvgKitchen;
