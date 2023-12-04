import * as React from "react";
import type { SVGProps } from "react";
const SvgMoving = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M820-617 614-412q-32 32-78 32t-78-32l-47-47q-14-14-35-14t-35 14L143-261q-9 9-21 9t-21-9q-9-9-9-21t9-21l198-198q32-32 78-32t78 32l46 46q15 15 35.5 15t35.5-15l205-205h-87q-13 0-21.5-8.5T660-690q0-13 8.5-21.5T690-720h160q13 0 21.5 8.5T880-690v160q0 13-8.5 21.5T850-500q-13 0-21.5-8.5T820-530z" />
  </svg>
);
export default SvgMoving;
