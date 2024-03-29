import * as React from "react";
import type { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M430-160H230q-12.75 0-21.375-8.625T200-190v-290h-81q-10.5 0-14.25-9.5T109-506l351-316q8.186-8 20.093-8T500-822l180 159v-102q0-6 4.5-10.5T695-780h50q6 0 10.5 4.5T760-765v176l91 83q8 7 4.25 16.5T841-480h-81v290q0 12.75-8.625 21.375T730-160H530v-240H430zm-170-60h110v-240h220v240h110v-341L480-761 260-561zm110-240h220zm25-110h170q0-33-25.5-54.5T480-646q-34 0-59.5 21.342Q395-603.315 395-570" />
  </svg>
);
export default SvgHouse;
