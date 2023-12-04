import * as React from "react";
import type { SVGProps } from "react";
const SvgBalcony = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M330-500v-60h60v60zm240 0v-60h60v60zM120-80v-320h40v-160q0-66 25-124.5t68.5-102Q297-830 355.5-855T480-880q66 0 124.5 25t102 68.5Q750-743 775-684.5T800-560v160h40v320zm60-60h105v-200H180zm165 0h105v-200H345zM220-400h230v-418q-99 12-164.5 85T220-560zm290 0h230v-160q0-100-65.5-173T510-818zm0 260h105v-200H510zm165 0h105v-200H675z" />
  </svg>
);
export default SvgBalcony;
