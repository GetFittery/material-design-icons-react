import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m718-327-99-99 42-42 57 56 141-141 42 42zM440-121l-99-91q-87-80-144.5-137T104-452q-35-46-49.5-86.5T40-625q0-90 60.5-152.5T250-840q57 0 105.5 26.5T440-736q42-54 89-79t101-25q81 0 135.5 55T832-652h-59q-9-55-46.5-91.5T630-780q-51 0-95 31t-71 88h-49q-26-56-70-87.5T250-780q-66 0-108 44.5T100-625q0 39 15.5 76t54 84Q208-418 274-355t166 155q32-29 60.5-54t56.5-49l6.5 6.5q6.5 6.5 14.5 14t14.5 14l6.5 6.5q-27 24-56 49t-62 55z" />
  </svg>
);
export default SvgHeartCheck;
