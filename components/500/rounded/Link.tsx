import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-274.022q-85.657 0-145.818-60.155-60.16-60.155-60.16-145.804t60.16-145.943Q194.343-686.218 280-686.218h133.304q14.424 0 24.245 9.991 9.821 9.991 9.821 24.489 0 14.499-9.821 24.195-9.821 9.695-24.245 9.695H280q-57.616 0-97.732 40.048-40.116 40.047-40.116 97.565t40.116 97.8q40.116 40.283 97.732 40.283h133.304q14.424 0 24.245 9.871 9.821 9.871 9.821 24.37 0 14.498-9.821 24.194-9.821 9.695-24.245 9.695zm72.37-174.543q-13.324 0-22.38-8.987-9.055-8.986-9.055-22.623 0-13.638 8.936-22.449 8.935-8.811 22.499-8.811h255.26q13.324 0 22.38 8.987 9.055 8.986 9.055 22.623 0 13.638-8.936 22.449-8.935 8.811-22.499 8.811zm194.565 174.543q-14.663 0-24.484-9.871-9.821-9.871-9.821-24.369 0-14.499 9.821-24.195 9.821-9.695 24.484-9.695H680q57.616 0 97.732-40.048 40.116-40.047 40.116-97.565t-40.116-97.8Q737.616-617.848 680-617.848H546.935q-14.663 0-24.484-9.871-9.821-9.871-9.821-24.37 0-14.498 9.821-24.313 9.821-9.816 24.484-9.816H680q85.657 0 145.937 60.275 60.281 60.275 60.281 145.924t-60.281 145.823Q765.657-274.022 680-274.022z" />
  </svg>
);
export default SvgLink;
