import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M412-80q-20 0-36.5-12T354-124l-35-127q-55-35-87-95t-32-134q0-74 32-134.5t87-94.5l35-127q5-20 21.5-32t36.5-12h136q20 0 36.5 12t21.5 32l35 127q55 34 87 94.5T760-480q0 74-32 134t-87 95l-35 127q-5 20-21.5 32T548-80zm68-180q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64m-87-484q23-7 44.5-10.5T480-758q21 0 42.5 3.5T567-744l-18-76H411zm18 604h138l18-76q-23 6-44.5 9.5T480-203q-21 0-42.5-3.5T393-216zm-18-680h174zm18 680h-18 174z" />
  </svg>
);
export default SvgWatch;
