import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionAnswer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 11V4H4v8.17l.59-.58.58-.59H6z" opacity={0.3} />
    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4zM4.59 11.59l-.59.58V4h11v7H5.17z" />
  </svg>
);
export default SvgQuestionAnswer;