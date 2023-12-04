import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity={0.3} />
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18z" />
  </svg>
);
export default SvgFlag;
