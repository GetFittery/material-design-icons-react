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
    <path d="M200-160v-320H80l400-360 200 177v-117h80v191l120 108.574H760V-160H530v-240H430v240zm60-60h110v-240h220v240h110v-341L480-761 260-561zm110-240h220zm25-110h170q0-33-25.5-54.5T480-646q-34 0-59.5 21.342Q395-603.315 395-570" />
  </svg>
);
export default SvgHouse;
