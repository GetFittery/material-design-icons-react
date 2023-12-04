import * as React from "react";
import type { SVGProps } from "react";
const SvgExercise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m826-585-42-42 45-45-157-157-45 45-43-43 86-88 244 244zM48-290l86-86 43 42-45 45 157 157 45-45 42 43-86 86zm695-122 85-85-331-331-85 85zM463-132l86-86-331-331-86 86zm9-248 109-109-92-92-109 109zm162 163L463-48 48-463l169-171 120 120 110-110-119-119 169-171 417 417-171 169-119-119-110 110z" />
  </svg>
);
export default SvgExercise;
